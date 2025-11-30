"use client";

import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import useHydration from "@/lib/use-hydration";
import Image from "next/image";

export default function Marquee() {
  const isHydrated = useHydration();

  return (
    <div className="bg-dark w-screen overflow-x-hidden">
      <div className="flex items-center mx-auto h-20 md:h-36 overflow-hidden">
        {isHydrated && (
          <Swiper
            className="h-full w-screen pointer-events-none swiper-marquee"
            freeMode={{
              enabled: true,
              momentum: false,
            }}
            modules={[Autoplay, FreeMode]}
            slidesPerView={"auto"}
            autoplay={{
              delay: 0,
            }}
            loop={true}
            speed={2000}
            style={
              {
                "--swiper-wrapper-transition-timing-function": "linear",
              } as React.CSSProperties
            }>
            {Array.from({ length: 10 }).map((_, i) => (
              <SwiperSlide key={i} className="max-w-64 text-white flex! items-center justify-center size-full">
                <Image src={"/banner/banner-logo.png"} alt="brand logo" width={200} height={100} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}
