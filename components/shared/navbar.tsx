"use client";

import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "./icons";
import { Button } from "../ui/button";
import { useState } from "react";
import { NAV_ITEMS } from "@/constants";
import Image from "next/image";

import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ClipboardMinus, Handbag, Heart, TextAlignJustify, User, UserRound, X } from "lucide-react";
import useHydration from "@/lib/use-hydration";

export default function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(true);
    setOpenNav(false);
  };

  const isHydrated = useHydration();

  return (
    <nav className="sticky inset-x-0 top-0 z-30 text-white">
      {isHydrated && (
        <div className="bg-primary">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-2k p-5 lg:py-5 lg:px-10">
            <Image src={"/"} alt="Khalifa logo" width={200} height={100} className="h-12 object-contain bg-white/10" />
            <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
              <ul className="flex font-semibold justify-center items-center">
                {NAV_ITEMS.map((item, i) => (
                  <li key={i}>
                    <Link href="/" className="flex flex-col items-center transition-colors ease-in-out duration hover:text-brand px-4">
                      <span className="text-center">{item.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center text-sm font-semibold">
              <Link href={"/"} className="flex-col items-center px-4 gap-0.5 hidden sm:flex group">
                <NavCountItem label="Хадгалсан" icon={<Heart className="size-5 duration-150 group-hover:scale-120" />} />
              </Link>

              {/* Cart drawer */}
              <Drawer direction="right" open={openCart} onOpenChange={setOpenCart}>
                <DrawerTrigger asChild>
                  <Button className="flex flex-col items-center px-4 py-0 gap-0.5 group w-fit">
                    <NavCountItem label="Сагс" icon={<Handbag className="size-5 duration-150 group-hover:scale-120" />} />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>Cart</DrawerTitle>
                    <DrawerDescription>lorem</DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>Cart footer</DrawerFooter>
                </DrawerContent>
              </Drawer>

              {/* TODO: Dropdown color */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Link href={"/"} className="flex-col items-center px-4 gap-0.5 hidden sm:flex group">
                    <UserRound className="size-5 duration-150 group-hover:scale-120" />
                    <span>Миний бүртгэл</span>
                  </Link>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-48" align="center">
                  <DropdownMenuLabel>Signed in as</DropdownMenuLabel>
                  <DropdownMenuItem className="pointer-events-none">soko.bbz.4@gmail.com</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User /> Хувийн мэдээлэл
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <ClipboardMinus /> Захиалгын мэдээлэл
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Drawer direction="right" open={openNav} onOpenChange={setOpenNav}>
                <DrawerTrigger asChild className="block sm:hidden">
                  <Button className="flex flex-col items-center px-4 gap-0.5">
                    <TextAlignJustify className="size-6" />
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="flex items-center justify-between">
                    <DrawerHeader>
                      <DrawerTitle>Navbar</DrawerTitle>
                    </DrawerHeader>
                    <Button variant={"naked"} size={"icon"}>
                      <X className="stroke-primary size-7" />
                    </Button>
                  </div>

                  <div className="flex flex-col justify-start font-bold text-2xl">
                    <div className="flex flex-col py-10">
                      {NAV_ITEMS.map((item, i) => (
                        <Link href="/" key={i} className="py-2">
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
                            <NavCountItem label="Сагс" count={2} icon={<Handbag className="size-6" />} isMobile />
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
      <div className="flex items-center justify-center bg-black gap-3 font-semibold py-2">
        <span className="size-7 rounded-full flex items-center justify-center border border-white text-xs leading-none font-bold">21+</span>
        <p className="">Хэтрүүлэн хэрэглэх нь таны эрүүл мэндэд хортой</p>
      </div>
    </nav>
  );
}

function NavCountItem({ label, icon, count = 2, isMobile = false }: { label: string; icon: React.ReactNode; count?: number; isMobile?: boolean }) {
  return (
    <>
      {isMobile ? (
        <>
          <span className="flex items-center gap-2">
            {icon}
            <span className="text-2xl">{label}</span>
          </span>
          <span className="bg-brand text-white rounded-full px-3 text-base">{count}</span>
        </>
      ) : (
        <>
          <span className="relative">
            {icon}
            <span className="bg-brand w-4 h-3 group-hover:scale-110 duration-150 flex items-center justify-center absolute -top-1 -right-2.5 rounded-full">
              {count && <span className="text-[10px] font-bold leading-none">2</span>}
            </span>
          </span>
          <span className="hidden sm:block font-bold">{label}</span>
        </>
      )}
    </>
  );
}
