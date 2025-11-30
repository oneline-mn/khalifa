import FeaturedBrand from "@/components/pages/home/featured-brand";
import Hero from "@/components/pages/home/hero";
import Marquee from "@/components/shared/marquee";
import ProductCard from "@/components/shared/product-card";
import { Button } from "@/components/ui/button";
import {
  CATEGORIES,
  FEATURED_BRAND,
  Product,
  PRODUCTS_LIST,
} from "@/constants";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      {FEATURED_BRAND.map((brand) => (
        <FeaturedBrand featured={brand} key={brand.id} {...brand} />
      ))}
      <div className="container text-primary! justify flex flex-col">
        <h1 className="text-3xl md:text-6xl uppercase font-bold text-center mb-14 md:mb-20 font-serif text-inherit">
          SHOP OUR SPIRITS
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-4 mx-auto max-w-2k h-fit text-inherit gap-6">
          {PRODUCTS_LIST.slice(0, 4).map((product: Product) => {
            return (
              <ProductCard
                category={getCategoryTitle(product.category_id)}
                image={product.image}
                key={product.id}
                price={product.price ?? 0}
                title={product.name}
                url={product.url}
              />
            );
          })}
        </div>
        <div className="flex justify-center w-full mt-16">
          <Button className="font-bold" size={"xl"} variant={"orange"}>
            Бүх бүтээгдэхүүн харах
          </Button>
        </div>
      </div>
    </div>
  );
}

function getCategoryTitle(categoryId?: number) {
  const category = CATEGORIES.find((c) => c.id === categoryId);
  return category ? category.title : "";
}
