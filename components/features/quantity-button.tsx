'use client'

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Handbag, Minus, Plus } from "lucide-react";
import { Input } from "../ui/input";

export default function QuantityButton({ variant }: { variant: "secondary" | "ghost" }) {
  const [quantity, setQuantity] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(0);  
    }
  };
  
  return (
    <>
      {quantity === 0 ? (
        <Button className="sm:text-xl font-bold flex items-center gap-2 h-11" size={"lg"} variant={variant} onClick={() => setQuantity(quantity + 1)}>
          <Handbag className="size-5" strokeWidth={2} />
          <span>Сагсанд нэмэх</span>
        </Button>
      ) : (
        <div className="flex items-center gap-2 border px-1 rounded-lg bg-white">
          <Button size={'icon-sm'} variant={'ghost'} className="text-primary" onClick={() => setQuantity(quantity - 1)}>
            <Minus />
          </Button>
          <Input value={quantity} className="bg-white text-primary border-0 ring-0 shadow-none w-14 text-center text-xl! font-bold" onChange={handleInputChange} />
          <Button size={'icon-sm'} variant={'ghost'} onClick={() => setQuantity(quantity + 1)}>
            <Plus />
          </Button>
        </div>
      )}
    </>
  );
}
