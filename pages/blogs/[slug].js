import BlogDetails from "@/contentful/BlogDetails";
import { client, getContentProps } from "../api/getContent";
import Layout from "@/components/layout";

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "blogs" });

  const paths = res.items.map((item) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  return getContentProps("blogs", params.slug);
};

export default function BlogDetail({ content }) {
  const blog = content[0];
  return (
    <Layout>
      <BlogDetails blog={blog}/>
    </Layout>
  );
}
