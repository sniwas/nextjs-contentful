import { getContentProps } from "./api/getContent.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function getStaticProps() {
  return getContentProps("terms-and-conditions");
}

export default function Blogs({ content }) {
  const { termsOfService } = content[0].fields;
  return (
    <div className="h-full overflow-x-hidden bg-default text-default text-base selection:bg-cyan-400 selection:text-white">
      <div className="px-10 flex bg-gray-100 min-h-screen flex-col justify-center overflow-hidden py-24 align-center items-center">
        <div className=" max-w-6xl align-center">
          <p class="code align-center text-center">
            Last updated on March 1, 2023
          </p>
          <h1 class="text-xl pt-3 pb-10 text-center">Terms of Service</h1>
          <div className="align-center text-justify text-base opacity-90 prose-md prose-headings:font-heading prose-headings:leading-tighter mt-8x prose-lg mx-auto px-3 prose-headings:tracking-tighter prose-a:text-cyan-500 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-a:text-blue-400 sm:px-6 lg:prose-xl">
            {documentToReactComponents(termsOfService)}
          </div>
        </div>
      </div>
    </div>
  );
}
