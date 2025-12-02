import Image from "next/image";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X, Handbag } from "lucide-react";
import QuantityButton from "./quantity-button";

import { Separator } from "@/components/ui/separator";
import { NavCountItem } from "./nav-product-count";
import Link from "next/link";

type CartProps = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Cart({ openCart, setOpenCart }: CartProps) {
  const delivery: number = 0;
  return (
    <Drawer direction="right" open={openCart} onOpenChange={setOpenCart}>
      <DrawerTrigger asChild>
        <Button className="flex flex-col items-center px-4 py-0 gap-0.5 group w-fit">
          <NavCountItem label="Сагс" icon={<Handbag className="size-5 duration-150 group-hover:scale-120" />} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-sreen overflow-y-scroll overflow-x-hidden">
        <DrawerHeader className="flex flex-row w-full justify-between p-0 border-b py-6! sticky top-0 bg-white">
          <DrawerTitle className="text-3xl font-bold">Миний сагс</DrawerTitle>
          <Button variant={"naked"} size={"icon"} onClick={() => setOpenCart(false)}>
            <X className="stroke-primary size-7" />
          </Button>
        </DrawerHeader>
        <div className="divide-y divide-gray-200">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <DrawerFooter className="border-t">
          <div className="mt-10 rounded-lg bg-accent px-6 py-5 text-primary font-bold space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <h1 className="opacity-60">Үнийн дүн</h1>
                <h1 className="text-xl">{(50000).toLocaleString()} ₮</h1>
              </div>
              <Separator className="bg-border" />
              <div className="flex justify-between items-center">
                <h1 className="opacity-60">Хүргэлт</h1>
                <h1 className="text-xl">{delivery === 0 ? "Үнэгүй" : delivery + "₮"}</h1>
              </div>
              <Separator className="bg-border" />
              <div className="flex justify-between items-center text-brand-orange">
                <h1>Нийт дүн</h1>
                <h1 className="text-xl">{(50000 + delivery).toLocaleString()}₮</h1>
              </div>
            </div>
            <Link href="/checkout">
              <Button variant={"orange"} size={"xl"} className="w-full" onClick={() => setOpenCart(false)}>Үргэлжүүлэх</Button>
            </Link>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function CartItem() {
  return (
    <div className="flex items-start gap-4 py-7">
      <Image src="/wine/wine-1.png" width={80} height={80} alt="product image" className="size-20 object-contain rounded-md " />
      <div className="flex flex-col grow-0 items-start gap-2">
        <a href="/13/">
          <h1 className="text-brandBlack font-bold text-xl">Glen Talloch Blended Whisky Rare &amp; Old - 0.7l</h1>
        </a>
        <p className="text-brand-orange font-manrope font-bold">95,000₮</p>
        <div className="mt-1 flex"></div>
        <QuantityButton variant="ghost" />
      </div>
    </div>
  );
}
