"use client";

import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "./icons";
import { Button } from "../ui/button";
import { useState } from "react";
import { NAV_ITEMS } from "@/constants";
import Image from "next/image";

import { usePathname } from "next/navigation";

import { ClipboardMinus, Handbag, Heart, TextAlignJustify, User, UserRound, X } from "lucide-react";
import useHydration from "@/lib/use-hydration";
import { cn } from "@/lib/utils";
import { NavCountItem } from "./nav-product-count";
import Cart from "./cart";
import ProfileDropDown from "./profile-dropdown";
import LangSwitch from "./lang-switch";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(true);
    setOpenNav(false);
  };

  const isHydrated = useHydration();
  const pathname = usePathname();
  return (
    <nav className="sticky inset-x-0 top-0 z-30 text-white">
      {isHydrated && (
        <div className="bg-primary">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-2k p-5 lg:py-5 lg:px-10">
            <Link href={"/"}>
              <Image src={"/logo/logo-white.svg"} alt="Khalifa logo" width={200} height={100} className="h-9 md:h-12 object-contain" />
            </Link>
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
              <ul className="flex font-semibold justify-center items-center">
                {NAV_ITEMS.map((item, i) => (
                  <li key={i}>
                    <Link href={item.href} className="flex flex-col items-center transition-colors ease-in-out duration hover:text-brand px-4">
                      <span className="text-center">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center text-sm font-semibold">
              <LangSwitch />
              <Link href={"/bookmark"} className="flex-col items-center px-4 gap-0.5 hidden sm:flex group">
                <NavCountItem label="Хадгалсан" icon={<Heart className="size-5 duration-150 group-hover:scale-120" />} />
              </Link>

              {/* Cart drawer */}
              <Cart openCart={openCart} setOpenCart={setOpenCart} />

              {/* Profile DropwDown */}
              <ProfileDropDown />

              <Drawer direction="right" open={openNav} onOpenChange={setOpenNav}>
                <DrawerTrigger asChild className="block lg:hidden">
                  <Button className="flex flex-col items-center px-4 gap-0.5">
                    <TextAlignJustify className="size-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="flex items-center justify-between">
                    <DrawerHeader className="flex flex-row w-full justify-between p-0 py-6">
                      <DrawerTitle>
                        <Image src={"/logo/logo-dark.svg"} width={200} height={50} className="object-contain h-9 object-left" alt="logo" />
                      </DrawerTitle>
                      <Button variant={"naked"} size={"icon"} onClick={() => setOpenNav(false)}>
                        <X className="stroke-primary size-7" />
                      </Button>
                    </DrawerHeader>
                  </div>

                  <div className="flex flex-col justify-start font-bold text-2xl">
                    <div className="flex flex-col py-10">
                      {NAV_ITEMS.map((item, i) => (
                        <Link href={item.href} key={i} className="py-2">
                          {item.label}
                        </Link>
                      ))}
                    </div>

                    {/* Menu mobile actions */}
                    <div className="border-t border-brand-orange space-y-6 py-10">
                      <Link href={"/"} className="flex items-center justify-between">
                        <NavCountItem label="Хадгалсан" icon={<Heart className="size-6" />} isMobile />
                      </Link>

                      {/* Cart handle on mobile */}
                      <Drawer direction="right" open={openCart} onOpenChange={setOpenCart}>
                        <DrawerTrigger asChild onClick={handleOpenCart}>
                          <Button variant={"naked"} className="flex items-center justify-between w-full px-0 font-bold">
                            <NavCountItem label="Сагс" icon={<Handbag className="size-6" />} isMobile />
                          </Button>
                        </DrawerTrigger>
                      </Drawer>

                      <Link href={"/"} className="flex items-center justify-between">
                        <span className="flex items-center gap-2">
                          <User className="size-6" />
                          <span>Миний бүртгэл</span>
                        </span>
                      </Link>
                    </div>
                  </div>
                  <DrawerFooter>
                    <div className="flex justify-between">
                      <span>mgl</span>
                      <div className="flex items-center gap-2">
                        <FacebookIcon />
                        <InstagramIcon />
                      </div>
                    </div>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      )}
      <div className={cn(pathname === "/" || pathname === "/about" ? "flex-center bg-black gap-3 font-semibold py-2" : "hidden")}>
        <span className={"size-7 rounded-full flex-center border border-white text-xs leading-none font-bold"}>21+</span>
        <p className="text-xs md:text-sm lg:text-base">Хэтрүүлэн хэрэглэх нь таны эрүүл мэндэд хортой</p>
      </div>
    </nav>
  );
}
