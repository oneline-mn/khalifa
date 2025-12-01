'use client'

import { Handbag, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ProductCard from "@/components/shared/product-card";
import Suggestion from "@/components/shared/suggestion";
import { Button } from "@/components/ui/button";
import { CATEGORIES, Product, PRODUCTS_LIST } from "@/constants";
import { getCategoryTitle } from "@/lib/func";
import { showToast } from "@/lib/use-toast";

export default function Page() {
  return (
    <section>
      <div className="flex items-center justify-center bg-dark text-white gap-4">
        <Link className="px-8 py-4 capitalize font-bold text-xl hover:text-brand transition" href={"#"}>
          All spirits
        </Link>
        {CATEGORIES.map((c) => {
          return (
            <Link className="px-8 py-4 capitalize font-bold text-xl hover:text-brand transition" href={"#"} key={c.id}>
              {c.title}
            </Link>
          );
        })}
      </div>
      <div>
        <div className="relative w-full h-full">
          <Image alt="Rum" className="relative overflow-hidden h-[148px] w-full md:h-[248px] transition-all object-cover object-center" height={600} src="/banner/banner-1.png" width={1200} />
          <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-6xl font-semibold">Rum</div>
        </div>
        <div className="bg-primary text-white">
          <div className="container">
            <div className="grid grid-cols-2 gap-x-4 md:gap-x-5 gap-y-5 md:gap-y-10 lg:gap-y-20 md:grid-cols-3 lg:gap-x-7 xl:grid-cols-4">
              {PRODUCTS_LIST.slice(0, 4).map((product: Product) => {
                return <ProductCard category={getCategoryTitle(product.category_id)} image={product.image} key={product.id} price={product.price ?? 0} quantity={product.quantity} title={product.name} url={product.url}>
                  <div className="flex gap-2">
                    <Button className="md:text-xl font-bold flex items-center gap-2 h-11" size={'lg'} variant={'secondary'}>
                      <Handbag className="size-5 hidden" strokeWidth={2} />
                      <span>
                      Сагсанд нэмэх</span></Button>
                    <Button className="p-0 h-full aspect-square group" onClick={()=>  showToast("success", "Таны сонгосон бүтээгдэхүүн амжилттай хадгалсан цэсэд нэмэгдлээ")} variant={'secondary'}><Heart className="group-hover:fill-brand group-hover:stroke-brand size-5" /></Button>
                  </div>
                </ProductCard>;
              })}
              {PRODUCTS_LIST.slice(0, 4).map((product: Product) => {
                return <ProductCard category={getCategoryTitle(product.category_id)} image={product.image} key={product.id} price={product.price ?? 0} quantity={product.quantity} title={product.name} url={product.url} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <Suggestion />
    </section>
  );
}
