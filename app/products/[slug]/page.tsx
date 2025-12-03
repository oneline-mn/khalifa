"use client";

import type { Swiper as SwiperType } from "swiper";

import Image from "next/image";
import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import QuantityButton from "@/components/shared/quantity-button";
import Suggestion from "@/components/shared/suggestion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
export default function Page() {
  const [thumbsSwiper, setThumbsSwiper] = useState<null | SwiperType>(null);

  const [activeSize, setActiveSize] = useState<number>(0);

  const images = ["/hero/hero-1.png", "/hero/hero-2.png", "/hero/hero-3.png"];

  return (
    <section className="mx-auto max-w-lg md:max-w-[1440px] py-10 px-6 md:px-[38px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-14 md:gap-14 pb-10">
        <div className="col-span-1 w-full lg:col-span-2 space-y-5">
          <Swiper
            className="aspect-square rounded-2xl"
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={{
              enabled: true,
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}>
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <Image alt="asd" className="size-full object-cover" height={100} src={img} width={100} />
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper className="mySwiper" freeMode={true} loop={true} modules={[FreeMode, Navigation, Thumbs]} onSwiper={setThumbsSwiper} slidesPerView={5} spaceBetween={10} watchSlidesProgress={true}>
            {images.map((img, i) => (
              <SwiperSlide key={i}>
                <Image alt="asd" className="cursor-pointer w-full aspect-square rounded-md object-cover" height={100} src={img} width={100} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-span-1 lg:col-span-3 space-y-6 ">
          <div className="space-y-3">
            <h1 className="text-4xl xl:text-6xl font-bold">Ballantines Finest</h1>
            <h1 className="text-brand-orange text-4xl font-bold">{(143000).toLocaleString()}₮</h1>
          </div>
          <Separator className="bg-accent" />

          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="font-bold mb-3 sm:text-2xl text-tertiary">Хэмжээ</h1>
              <div className="flex items-center gap-4">
                {["0.7", "1"].map((s, i) => {
                  return (
                    <Button className={cn(activeSize === i && "border border-brand-orange", "font-bold")} key={i} onClick={() => setActiveSize(i)} size={"lg"} variant={"outline"}>
                      {s}L
                    </Button>
                  );
                })}
              </div>
            </div>
            <div className="w-fit">
              <QuantityButton variant="ghost" />
            </div>
          </div>
          <Separator className="bg-accent" />

          <div className="text-tertiary font-medium text-lg gap-3">
            <h2 className="font-bold mb-3 sm:text-2xl">Тайлбар:</h2>
            <h2> Төрөл: Whiskey </h2>
            <p className="mt-3">
              Ballantine’s&nbsp;Finest&nbsp;виски нь 1910 онд Баллатины гэр бүлийн бүтээсэн өнөөдрийн хэрэглээнд байгаа хамгийн эртний жор гэдгийг онцлон тэмдэглэе. Энэ орц найрлагад 40 гаруй төрлийн
              амуу соёолж, үр орсон. Эдгээрийг Шотландад шүтэн тахидаг дөрвөн өөр бүс нутгаас нарийн шалгаж, сонгон авдаг нь энэхүү виски нь өнөөдрийг хүртэл дэлхий даяар хамгийн их танигдсан их
              борлуулалттай болсон гол шалтгаан нь болов уу.
            </p>
          </div>
          <Accordion collapsible type="single">
            <AccordionItem className="border-b! border-primary/10" value="item-1">
              <AccordionTrigger className="md:text-2xl text-tertiary font-bold">The tasting notes</AccordionTrigger>
              <AccordionContent className="text-lg text-tertiary">
                <p>Өдөр тутмын хэрэглээний виски гэгддэг тул амт нь уухад хялбар сүүн шоколад, улаан алим, ваниль зэрэгийг төгс зохицлоосон амттай</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="border-b! border-primary/10" value="item-2">
              <AccordionTrigger className="md:text-2xl text-tertiary font-bold">How to enjoy</AccordionTrigger>
              <AccordionContent className="text-lg text-tertiary">
                <p>Өдөр тутмын хэрэглээний виски гэгддэг тул амт нь уухад хялбар сүүн шоколад, улаан алим, ваниль зэрэгийг төгс зохицлоосон амттай</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Suggestion />
    </section>
  );
}
