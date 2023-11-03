export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen bg-gray-100 flex  flex-col justify-between">
      <div className=" mx-auto pb-5 w-full">{children}</div>
      <footer className="relative flex flex-col w-full items-center justify-center">
        <a
          href="/"
          className="items-center justify-center text-center text-xs text-red-500"
        >
          Terms and Conditions
        </a>
        <div className="items-center justify-center p-4 text-center text-xs">
          All rights reserved to Contentful Demo Site
        </div>
      </footer>
    </div>
  );
}
