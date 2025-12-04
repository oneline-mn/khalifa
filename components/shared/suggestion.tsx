import { Product, PRODUCTS_LIST } from "@/constants";
import ProductCard from "../features/product-card";
import { getCategoryTitle } from "@/lib/func";
import { Button } from "../ui/button";
import Link from "next/link";

export default function Suggestion() {
  return (
    <div className="container text-primary! justify flex flex-col">
      <h1 className="text-3xl md:text-6xl uppercase font-bold text-center mb-14 md:mb-20 font-serif text-inherit">SHOP OUR SPIRITS</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 mx-auto max-w-2k h-fit text-inherit gap-10">
        {PRODUCTS_LIST.slice(0, 4).map((product: Product) => {
          return (
            <ProductCard
              category={getCategoryTitle(product.category_id)}
              image={product.image}
              key={product.id}
              price={product.price ?? 0}
              quantity={product.quantity}
              title={product.name}
              url={product.url}
              shadow="light"
            />
          );
        })}
      </div>
      <div className="flex justify-center w-full mt-16">
        <Link href="/products">
          <Button className="font-bold" size={"xl"} variant={"orange"}>
            Бүх бүтээгдэхүүн харах
          </Button>
        </Link>
      </div>
    </div>
  );
}
