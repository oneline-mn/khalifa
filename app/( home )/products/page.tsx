"use client";

import { ChevronDown, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import ProductCard from "@/components/shared/product-card";
import QuantityButton from "@/components/shared/quantity-button";
import Suggestion from "@/components/shared/suggestion";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { CATEGORIES, Product, PRODUCTS_LIST } from "@/constants";
import { getCategoryTitle } from "@/lib/func";
import { showToast } from "@/lib/use-toast";

export default function Page() {
  return (
    <section>
      <section className="relative">
        <div className="sticky-bottom-nav">
          <div className="flex w-full justify-between md:hidden px-5 py-3 bg-dark text-white font-bold text-xl">
            <h1>Ангилал:</h1>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-1 text-brand">
                  Gift Set <ChevronDown className="size-5" strokeWidth={3} />{" "}
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="mt-3">
                {CATEGORIES.map((c) => {
                  return (
                    <DropdownMenuItem className="group flex-center" key={c.id}>
                      <div className="capitalize py-2 font-bold text-xl group-hover:text-brand transition text-nowrap leading-none">{c.title}</div>
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="md:flex items-center justify-center bg-dark text-white gap-x-4 flex-wrap w-full hidden">
            <Link className="px-8 py-4 capitalize font-bold text-xl hover:text-brand transition" href={"#"}>
              All spirits
            </Link>
            {CATEGORIES.map((c) => {
              return (
                <Link className="px-8 py-3 capitalize font-bold lg:text-xl hover:text-brand transition text-nowrap leading-none" href={"#"} key={c.id}>
                  {c.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div>
          <div className="relative w-full h-full">
            <Image alt="Rum" className="relative overflow-hidden h-[148px] w-full md:h-[248px] transition-all object-cover object-center" height={600} src="/banner/banner-1.png" width={1200} />
            <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-6xl font-semibold">Rum</div>
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
                      url={'/products/test'}>
                      <div className="flex gap-2">
                        <QuantityButton variant="secondary" />
                        <Button className="p-0 h-full aspect-square group" onClick={() => showToast("success", "Таны сонгосон бүтээгдэхүүн амжилттай хадгалсан цэсэд нэмэгдлээ")} variant={"secondary"}>
                          <Heart className="group-hover:fill-brand group-hover:stroke-brand size-5" />
                        </Button>
                      </div>
                    </ProductCard>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Suggestion />
    </section>
  );
}
