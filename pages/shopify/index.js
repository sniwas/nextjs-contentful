import Layout from "@/components/layout";
import Head from "next/head";
import Link from "next/link";
import Products from "../../contentful/Shopify/Products";
import { getContentProps } from "../api/getContent";

export async function getStaticProps() {
  return getContentProps("shopify");
}

export default function Shopify({ content }) {
  return (
    <Head>
      <Layout>
        <header className="text-center mx-16">
          <Link href="/">
            <h1 className="p-5 leading-tighter font-heading font-bold tracking-tighter text-4xl md:text-5xl">
              Shopify - Products
            </h1>
          </Link>
        </header>
        <section className="flex mx-auto max-w-7xl px-6 py-16 justify-center">
          <Products products={content} />
        </section>
      </Layout>
    </Head>
  );
}
