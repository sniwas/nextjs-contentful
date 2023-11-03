import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN ,
});

export async function getContentProps(contentType, slug) {
  const query = {
    content_type: contentType,
  };

  if (slug) {
    query["fields.slug"] = slug;
  }

  const res = await client.getEntries(query);

  return {
    props: {
      content: res.items,
    },
  };
}
