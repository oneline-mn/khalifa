"use client";

import { A11y, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import useHydration from "@/lib/use-hydration";

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
          loop={true}
        >
          <SwiperSlide className="bg-red-200"> Slide 1</SwiperSlide>
          <SwiperSlide className="bg-green-200"> Slide 1</SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
