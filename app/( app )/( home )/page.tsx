import FeaturedBrand from "@/components/features/featured-brand";
import Hero from "@/components/features/hero";
import Marquee from "@/components/shared/marquee";
import Suggestion from "@/components/shared/suggestion";
import {
  FEATURED_BRAND
} from "@/constants";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      {FEATURED_BRAND.map((brand) => (
        <FeaturedBrand featured={brand} key={brand.id} {...brand} />
      ))}
      <Suggestion />
    </div>
  );
}

