import { isFullDatabase } from "@notionhq/client";
import { NextResponse } from "next/server";
import { notion } from "@/lib/notion";

type UpdatePageArgs = Parameters<typeof notion.pages.update>[0];
type NotionProperties = NonNullable<UpdatePageArgs["properties"]>;

type NotionLeadUpdateBody = {
  pageId?: string;
  emailAddress?: string;
  fullName?: string;
  contactChannel?: string;
  contactHandleOrNumber?: string;
  businessName?: string;
  industryOrNiche?: string;
  countryOrLocation?: string;
  whatTheyNeed?: string;
  budgetRange?: string;
  timelineOrUrgency?: string;
  leadScore?: string;
  pipelineStatus?: string;
  existingWebsiteUrl?: string;
  referralSource?: string;
  projectValueEstimate?: number | null;
  callBookedDate?: string | null;
  followUpCount?: number | null;
  yourNotes?: string;
};

function title(value: string): NotionProperties[string] {
  return {
    title: [
      {
        text: {
          content: value,
        },
      },
    ],
  };
}

function richText(value: string): NotionProperties[string] {
  return {
    rich_text: [
      {
        text: {
          content: value,
        },
      },
    ],
  };
}

function select(value: string): NotionProperties[string] {
  return {
    select: {
      name: value,
    },
  };
}

function number(value: number | null): NotionProperties[string] {
  return {
    number: value,
  };
}

function url(value: string): NotionProperties[string] {
  return {
    url: value,
  };
}

function email(value: string): NotionProperties[string] {
  return {
    email: value,
  };
}

function date(value: string | null): NotionProperties[string] {
  return {
    date: value
      ? {
          start: value,
        }
      : null,
  };
}

function buildProperties(body: NotionLeadUpdateBody): NotionProperties {
  const properties: NotionProperties = {};

  if (body.fullName) {
    // Assumption: "Full name" is the title property in your Notion database.
    properties["Full name"] = title(body.fullName);
  }

  if (body.contactChannel) {
    properties["Contact channel"] = select(body.contactChannel);
  }

  if (body.contactHandleOrNumber) {
    properties["Contact handle / number"] = richText(body.contactHandleOrNumber);
  }

  if (body.businessName) {
    properties["Business name"] = richText(body.businessName);
  }

  if (body.industryOrNiche) {
    properties["Industry / niche"] = select(body.industryOrNiche);
  }

  if (body.countryOrLocation) {
    properties["Country / location"] = richText(body.countryOrLocation);
  }

  if (body.whatTheyNeed) {
    properties["What they need"] = select(body.whatTheyNeed);
  }

  if (body.budgetRange) {
    properties["Budget range"] = select(body.budgetRange);
  }

  if (body.timelineOrUrgency) {
    properties["Timeline / urgency"] = select(body.timelineOrUrgency);
  }

  if (body.leadScore) {
    properties["Lead score"] = select(body.leadScore);
  }

  if (body.pipelineStatus) {
    properties["Pipeline status"] = select(body.pipelineStatus);
  }

  if (body.existingWebsiteUrl) {
    properties["Existing website URL"] = url(body.existingWebsiteUrl);
  }

  if (body.emailAddress) {
    properties["Email address"] = email(body.emailAddress);
  }

  if (body.referralSource) {
    properties["Referral source"] = richText(body.referralSource);
  }

  if (body.projectValueEstimate !== undefined) {
    properties["Project value estimate"] = number(body.projectValueEstimate ?? null);
  }

  if (body.callBookedDate !== undefined) {
    properties["Call booked date"] = date(body.callBookedDate ?? null);
  }

  if (body.followUpCount !== undefined) {
    properties["Follow-up count"] = number(body.followUpCount ?? null);
  }

  if (body.yourNotes) {
    properties["Your notes"] = richText(body.yourNotes);
  }

  return properties;
}

async function getNotionDataSourceId() {
  if (process.env.NOTION_DATA_SOURCE_ID) {
    return process.env.NOTION_DATA_SOURCE_ID;
  }

  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DB_ID!,
  });

  if (!isFullDatabase(database)) {
    throw new Error(
      "The Notion database response was partial. Set NOTION_DATA_SOURCE_ID explicitly in .env.",
    );
  }

  const firstDataSourceId = database.data_sources[0]?.id;

  if (!firstDataSourceId) {
    throw new Error(
      "No data source found for the configured Notion database. Set NOTION_DATA_SOURCE_ID explicitly.",
    );
  }

  return firstDataSourceId;
}

export async function POST(req: Request) {
  try {
    if (!process.env.NOTION_API_KEY) {
      return NextResponse.json(
        {
          error:
            "NOTION_API_KEY is missing in your .env.local file. Please configure your Notion integration token.",
        },
        { status: 500 },
      );
    }

    if (!process.env.NOTION_DB_ID && !process.env.NOTION_DATA_SOURCE_ID) {
      return NextResponse.json(
        {
          error:
            "NOTION_DB_ID is missing in your .env.local file. Please configure your Notion database ID.",
        },
        { status: 500 },
      );
    }

    const body = (await req.json()) as NotionLeadUpdateBody;
    const properties = buildProperties(body);
    const hasProperties = Object.keys(properties).length > 0;

    if (!hasProperties) {
      return NextResponse.json(
        {
          error:
            "Send at least one field from the lead payload to create or update a Notion page.",
        },
        { status: 400 },
      );
    }

    if (body.pageId) {
      const response = await notion.pages.update({
        page_id: body.pageId,
        properties,
      });

      return NextResponse.json({
        ok: true,
        pageId: body.pageId,
        mode: "updated",
        response,
      });
    }

    // Determine parent: prioritize direct database_id or data_source_id
    const parentParam = process.env.NOTION_DATA_SOURCE_ID
      ? { data_source_id: process.env.NOTION_DATA_SOURCE_ID }
      : process.env.NOTION_DB_ID
        ? { database_id: process.env.NOTION_DB_ID }
        : { data_source_id: await getNotionDataSourceId() };

    let response: Awaited<ReturnType<typeof notion.pages.create>> | null = null;
    let attempts = 0;
    const maxAttempts = 6;

    while (attempts < maxAttempts) {
      try {
        response = await notion.pages.create({
          parent: parentParam,
          properties,
        });
        break; // Successfully created
      } catch (createErr) {
        attempts++;
        if (createErr instanceof Error) {
          // Case 1: Property does not exist in this Notion database
          const notExistsMatch = createErr.message.match(/^(.*?) is not a property that exists/);
          if (notExistsMatch && notExistsMatch[1] && properties[notExistsMatch[1]]) {
            delete properties[notExistsMatch[1]];
            continue;
          }

          // Case 2: Specific property validation error
          const propValMatch = createErr.message.match(/body\.properties\.([^\s.]+)/);
          if (propValMatch && propValMatch[1] && properties[propValMatch[1]]) {
            delete properties[propValMatch[1]];
            continue;
          }
        }

        // Case 3: Ultimate fallback on last attempt - preserve lead with minimum viable schema
        if (attempts >= maxAttempts - 1) {
          try {
            const fallbackNotes = body.yourNotes || 
              `Lead Phone: ${body.contactHandleOrNumber || "N/A"}\nBusiness: ${body.businessName || "N/A"}\nChannel: ${body.contactChannel || "N/A"}`;
            
            response = await notion.pages.create({
              parent: parentParam,
              properties: {
                "Full name": title(body.fullName || body.businessName || "New Promo Lead"),
                ...(properties["Your notes"] ? { "Your notes": properties["Your notes"] } : { "Your notes": richText(fallbackNotes) }),
              },
            });
            break;
          } catch {
            throw createErr;
          }
        }

        throw createErr;
      }
    }

    if (!response) {
      throw new Error("Failed to create Notion lead page after recovery attempts.");
    }

    return NextResponse.json({
      ok: true,
      pageId: response.id,
      mode: "created",
      response,
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Failed to create or update Notion page.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
