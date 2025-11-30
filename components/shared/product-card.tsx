import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
  url: string;
  price: number;
}

export default function ProductCard({ image, title, category, url, price }: ProductCardProps) {
  return (
    <Link href={url} className="flex flex-col rounded-lg relative lg:gap-6 h-full">
      <div className="aspect-1 relative w-full overflow-hidden rounded-lg">
        <Image src={image} width={900} height={900} alt="wine" className="h-[88%] mx-auto w-auto object-contain object-center" />
        <Image src={image} width={900} height={900} alt="wine" className="h-[88%] mx-auto rotate-x-180 absolute top-[88%] w-auto object-contain left-[50%] -translate-x-[50%] object-center blur-[2px] -z-10" />
        <div className="absolute inset-x-0 top-[60%] bottom-0 bg-linear-to-b from-white/0 to-white"></div>
      </div>
      <div className="flex flex-col gap-2 my-2 md:my-4 text-left justify-between">
        <div className="space-y-2">
          <p className="capitalize">{category}</p>
          <h1 className="font-bold text-xl md:text-2xl line-clamp-2 leading-snug">{title}</h1>
        </div>
        <h1 className="md:text-2xl font-manrope font-bold space-x-1 text-brand-orange">
          <span>{price && price.toLocaleString()}</span>
          <span>₮</span>
        </h1>
      </div>
    </Link>
  );
}
