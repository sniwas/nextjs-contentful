import ProductCard from "./ProductCard";

export default function Products({ products }: any) {
  return (
    <ul className="mx-auto  grid max-w-7xl gap-4 flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product: any) => {
        return (
          <li
            key={product.sys.id}
            className="md:mb-4 flex justify-center rounded-xl border-[1px]   
      bg-offset shadow-sm hover:translate-y-[-6px]  hover:shadow-lg hover:transition-all hover:duration-200 hover:ease-out"
          >
            <ProductCard product={product} />
          </li>
        );
      })}
    </ul>
  );
}
