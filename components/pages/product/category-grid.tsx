import { Category } from "@/constants";
import Link from "next/link";
import { use } from "react";

export default function CategoryGrid({
  categoryPromises,
}: {
  categoryPromises: Promise<Category[]>;
}) {
  const cat = use(categoryPromises);

  return (
    <Link
      className="px-8 py-3 capitalize font-bold lg:text-xl hover:text-brand transition text-nowrap leading-none"
      href={"#"}
      // key={cat.id}
    >
      {cat.title}
    </Link>
  );
}
