import Link from "next/link";
import { products } from "@/products";
import Image from "next/image";
const Products = () => {
  return (
    <main className="grid grid-cols-6 mt-4 gap-1">
      {products.map((product) => {
        return (
          <article key={product.id}>
            <figure className="h-[210px] w-[210px] relative">
              <Link href={`/products/${product.id}`}>
                <Image
                  className="object-cover"
                  fill
                  priority
                  src={product?.url}
                  alt={product.title}
                />
              </Link>
            </figure>
          </article>
        );
      })}
    </main>
  );
};

export default Products;
