"use client";

import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useHydration from "@/lib/use-hydration";
import Image from "next/image";
import { HERO_LIST } from "@/constants";

export default function Hero() {
  const isHydrated = useHydration();

  return (
    <div className="aspect-2/1 md:aspect-3/1 ">
      {isHydrated && (
        <Swiper
          className="h-full"
          modules={[Pagination, A11y, Autoplay]}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className} custom-bullet"></span>`;
            },
          }}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
          }}
          loop={true}>
          {HERO_LIST.map((image, index) => {
            return (
              <SwiperSlide key={index} className="size-full">
                <Image src={image.src} alt="hero image" fill className="size-full object-cover" placeholder="blur" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}
