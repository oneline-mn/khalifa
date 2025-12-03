"use client";

import { Heart } from "lucide-react";
import Image from "next/image";

import ProductCard from "@/components/shared/product-card";
import QuantityButton from "@/components/shared/quantity-button";
import { Button } from "@/components/ui/button";
import { Product, PRODUCTS_LIST } from "@/constants";
import { getCategoryTitle } from "@/lib/func";
import { showToast } from "@/lib/use-toast";

export default function Page() {
  return (
    <section>
      <div className="relative w-full h-full">
        <Image
          alt="bookmark banner"
          className="relative overflow-hidden h-[148px] w-full md:h-[248px] transition-all object-cover object-center"
          height={600}
          src="/banner/banner-1.png"
          width={1200}
        />
        <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-6xl">Favoured Products</div>
      </div>
      <div className="bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-2 gap-x-4 md:gap-x-5 gap-y-20 md:grid-cols-3 lg:gap-x-7 xl:grid-cols-4">
            {PRODUCTS_LIST.slice(0, 4).map((product: Product) => {
              return (
                <ProductCard
                  category={getCategoryTitle(product.category_id)}
                  image={product.image}
                  key={product.id}
                  price={product.price ?? 2}
                  quantity={product.quantity}
                  title={product.name}
                  url={product.url}>
                  <div className="flex gap-2">
                    <QuantityButton variant="secondary" />
                    <Button className="p-0 h-full aspect-square group" onClick={() => showToast("success", "Таны сонгосон бүтээгдэхүүн амжилттай хадгалсан цэсэд нэмэгдлээ")} variant={"secondary"}>
                      <Heart className="group-hover:fill-rose-400 group-hover:stroke-brand size-5" />
                    </Button>
                  </div>
                </ProductCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
