import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="h-[60dvh] flex flex-col gap-6 items-center justify-center">
      <h1 className="font-medium text-2xl">Энэ хуудас байхгүй байна!</h1>
      <Button variant={"orange"}>
        <Link href={"/"}>
          Нүүр хуудас руу буцах
        </Link>
      </Button>
    </div>
  );
}
