import Link from "next/link";
import { getFormattedDate } from "@/utils/common";

export default function BlogCard({ post }: any) {
  const { heading, slug, bannerImage, category, publishedOn, authorLink } =
    post.fields;
  const { file, title, description } = bannerImage.fields;
  const { name, profileImage } = authorLink.fields;
  return (
    <main className="flex flex-col mx-auto grid max-w-md md:max-w-none ">
      <div className="relative h-52 overflow-hidden rounded  shadow-lg   ">
        <Link href={`/blogs/${slug}/`}>
          {file.url && (
            <img
              src={file.url}
              className="rounded object-cover h-full w-full shadow-lg"
              alt={title}
              loading="lazy"
              decoding="async"
            />
          )}
        </Link>
      </div>

      <div className=" p-5 flex flex-col justify-between ">
        <div className="flex pb-2">
          <a
            className="w-fit capitalize"
            href={`/blogs/${slug}/`}
            // href={`/category/${category.toLowerCase().replaceAll(" ", "-")}/`}
          >
            <p className="w-fit border-b-2 border-red-500 capitalize text-xs hover:text-red-500">
              {category}
            </p>
          </a>
        </div>
        <a
          className="transition duration-200 ease-in hover:text-red-500"
          href={`/blogs/${slug}/`}
        >
          <h2 className="font-heading my-1 font-bold leading-tight text-sm">
            {heading}
          </h2>
        </a>
        <div className="my-2 line-clamp-3">
          {description && (
            <p className="flex-grow select-none text-offset text-xs ">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="m-4 mb-6 flex flex-col justify-end xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-row items-center">
          <img
            className="mr-2 h-10 w-10 rounded-full text-xs"
            src={profileImage.fields.file.url}
            alt={name}
          />
          <div className="flex flex-col">
            <a
              className="font-bold capitalize text-xs hover:underline xl:text-sm"
              href={`/blogs/${slug}/`}
            >
              {name}
            </a>
            <p className="block font-extralight text-xs xl:hidden">
              <time
                dateTime={String(publishedOn)}
                className="text-[#57606a] opacity-80"
              >
                {getFormattedDate(publishedOn)}
              </time>
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-3 font-extralight text-xs xl:block">
          <time
            dateTime={String(publishedOn)}
            className="text-[#57606a] opacity-80"
          >
            {getFormattedDate(publishedOn)}
          </time>
        </div>
      </div>
    </main>
  );
}
