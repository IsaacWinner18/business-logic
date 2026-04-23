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
    properties["Email address"] = richText(body.emailAddress);
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
    const body = (await req.json()) as NotionLeadUpdateBody;
    const properties = buildProperties(body);
    const hasProperties = Object.keys(properties).length > 0;

    if (!hasProperties) {
      return NextResponse.json({
        error: "Send at least one field from the lead payload to create or update a Notion page.",
      }, { status: 400 });
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

    const dataSourceId = await getNotionDataSourceId();
    const response = await notion.pages.create({
      parent: {
        data_source_id: dataSourceId,
      },
      properties,
    });

    return NextResponse.json({
      ok: true,
      pageId: response.id,
      mode: "created",
      response,
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to create or update Notion page.";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
