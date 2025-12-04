import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X, Handbag } from "lucide-react";

import { NavCountItem } from "../../features/nav-product-count";
import Link from "next/link";
import CheckoutSummary from "./checkout-summary";
import { CartItem } from "./cart-item";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

type CartProps = {
  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Cart({ openCart, setOpenCart }: CartProps) {
  const item = [1, 1, 1, 1, 11];
  return (
    <Drawer direction="right" open={openCart} onOpenChange={setOpenCart}>
      <DrawerTrigger asChild>
        <Button className="flex flex-col items-center px-4 py-0 gap-0.5 group w-fit">
          <NavCountItem label="Сагс" icon={<Handbag className="size-5 duration-150 group-hover:scale-120" />} />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="p-0 h-screen">
        <DrawerHeader className="flex flex-row w-full justify-between border-b py-6! sticky top-0 bg-white">
          <DrawerTitle className="text-3xl font-bold">Миний сагс</DrawerTitle>
          <Button variant={"naked"} size={"icon"} onClick={() => setOpenCart(false)}>
            <X className="stroke-primary size-7" />
          </Button>
        </DrawerHeader>
        <ScrollArea className="h-full overflow-y-scroll px-6">
          <div className="divide-y divide-gray-200">
            {item.length === 0 ? (
              <div className="flex flex-col flex-1 items-center py-20 gap-7 md:pt-10 md:gap-10">
                <Image src="/empty-cart.svg" alt="empty cart" width={200} height={200} className="size-40" />
                <h1 className="text-xl font-medium">Таны сагс хоосон байна</h1>
              </div>
            ) : (
              <>
                {item.map((asd, i) => {
                  return <CartItem key={i} />;
                })}
              </>
            )}
          </div>

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
          
        </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}
