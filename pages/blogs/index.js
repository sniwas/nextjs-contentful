import Layout from "@/components/layout";
import BlogListing from "@/contentful/BlogListing";
import Head from "next/head";
import Link from "next/link";
import { getContentProps } from "../api/getContent";

export async function getStaticProps() {
  return getContentProps("blogs");
}

export default function Blogs({ content }) {
  return (
    <Head>
      <Layout>
        <header className="text-center mx-16">
          <Link href="/">
            <h1 className="p-5 leading-tighter font-heading font-bold tracking-tighter text-4xl md:text-5xl">
              Blogs
            </h1>
          </Link>
        </header>
        <section className="flex mx-auto max-w-7xl px-6 py-16 justify-center">
          <BlogListing posts={content} />
        </section>
      </Layout>
    </Head>
  );
}
