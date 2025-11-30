import { Button } from "@/components/ui/button";
import { FeaturedBrand as FeaturedBrandType, FeaturedProduct } from "@/constants";
import Image from "next/image";
import Link from "next/link";

interface FeaturedBrandProps {
  featured: FeaturedBrandType;
}

export default function FeaturedBrand({ featured }: FeaturedBrandProps) {
  return (
    <section className="bg-primary">
      <div className="relative">
        <Image src={featured.banner.image} width={1200} height={600} alt={featured.title} className="w-full h-auto min-h-[180px] object-center object-cover" />
        <Image src={featured.banner.logo} width={180} height={90} alt={featured.title} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[180px] w-auto object-contain" />
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-x-20 gap-y-8">
          <div className="col-span-3 lg:col-span-1">
            <h1 className="font-serif text-2xl leading-snug lg:text-5xl font-bold w-full">{featured.title}</h1>
          </div>
          <div className="grid grid-cols-2 gap-10 lg:gap-16 lg:col-span-2 col-span-3 h-fit w-full">
            <div className="col-span-2">
              <p className="md:text-2xl font-semibold text-justify mb-7">{featured.description}</p>
            </div>

            {featured.products.map((product: FeaturedProduct) => (
              <FeaturedProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProductCard({ url, image, title, description }: FeaturedProduct) {
  return (
    <div className="flex flex-col gap-6">
      <Link href={url} className="relative">
        <Image src={image} width={900} height={900} alt={title} className="w-full aspect-9/10" />
      </Link>
      <div className="flex flex-col gap-4 text-white justify-between h-full">
        <div className="space-y-3">
          <h1 className="font-bold text-xl md:text-[32px] leading-normal">{title}</h1>
          <p className="text md:text-xl leading-normal mb-6">{description}</p>
        </div>
        <Link href={url}>
          <Button className="hover:bg-gray-200 hover:text-primary rounded font-bold text-sm px-10 py-5 border">Дэлгэрэнгүй</Button>
        </Link>
      </div>
    </div>
  );
}
