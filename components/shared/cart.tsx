import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X, Handbag } from "lucide-react";

import { NavCountItem } from "./nav-product-count";
import Link from "next/link";
import CheckoutSummary from "../pages/cart/checkout-summary";
import { CartItem } from "../pages/cart/cart-item";

type CartProps = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Cart({ openCart, setOpenCart }: CartProps) {
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
          {Array.from({ length: 4 }).map((_, i) => (
            <CartItem key={i} />
          ))}
        </div>
        <DrawerFooter className="border-t">
          <CheckoutSummary
            action={
              <Link href="/cart/checkout" onClick={() => setOpenCart(false)}>
                <Button className="w-full" size={"xl"} variant={"orange"}>
                  Үргэлжлүүлэх
                </Button>
              </Link>
            }
            totalPrice={5000}
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
