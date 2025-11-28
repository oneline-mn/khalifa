import { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import Link from "next/link";
import { CartIcon, HeartIcon, UserIcon } from "./icons";

export default function Navbar() {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 text-white">
      <div className="bg-primary">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-2k p-5 lg:py-7 lg:px-10">
          <div>Image</div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto">
            <ul className="flex font-semibold justify-center items-center">
              <li>
                <Link href="/" className="flex flex-col items-center transition-colors ease-in-out duration hover:text-brand px-4">
                  <span className="text-center">Онцлох брэндүүд</span>
                </Link>
              </li>
              <li>
                <Link href="/products/" className="flex flex-col items-center transition-colors ease-in-out duration hover:text-brand px-4">
                  <span className="text-center">Бүтээгдэхүүн</span>
                </Link>
              </li>
              <li>
                <Link href="/about/" className="flex flex-col items-center transition-colors ease-in-out duration hover:text-brand px-4">
                  <span className="text-center">Бидний тухай</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center text-sm font-semibold">
            <Link href={"/"} className="flex flex-col items-center px-4 gap-0.5">
              <HeartIcon className="size-5" />
              <h1>Хадгалсан</h1>
            </Link>
            <Link href={"/"} className="flex flex-col items-center px-4 gap-0.5">
              <CartIcon className="size-5" />
              <h1>Хадгалсан</h1>
            </Link>
            <Link href={"/"} className="flex flex-col items-center px-4 gap-0.5">
              <UserIcon className="size-5" />
              <h1>Хадгалсан</h1>
            </Link>
          </div>
          <Drawer direction="right">
            <DrawerTrigger className="hidden">Open</DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Navbar</DrawerTitle>
                <DrawerDescription>lorem</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>Navbar footer</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
