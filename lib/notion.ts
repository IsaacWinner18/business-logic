import { Client } from "@notionhq/client";

function getNotionAuth(): string | undefined {
  let token = process.env.NOTION_API_KEY?.trim();
  if (!token) return undefined;

  // Strip wrapping quotes if present in .env
  if (
    (token.startsWith('"') && token.endsWith('"')) ||
    (token.startsWith("'") && token.endsWith("'"))
  ) {
    token = token.slice(1, -1).trim();
  }

  // Strip accidental "Bearer " prefix if user included it in the environment variable
  if (token.toLowerCase().startsWith("bearer ")) {
    token = token.slice(7).trim();
  }

  return token || undefined;
}

export const notion = new Client({
  auth: getNotionAuth(),
});

