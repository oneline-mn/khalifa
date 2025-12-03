import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

import { ClipboardMinus, LogOut, User, UserRound } from "lucide-react";
import Link from "next/link";
import Login from "../pages/home/login";

export default function ProfileDropDown({ login }: { login: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {login ? (
          <Link href={"/profile"} className="flex-col items-center px-4 gap-0.5 hidden sm:flex group">
            <UserRound className="size-5 duration-150 group-hover:scale-120" />
            <span>Миний бүртгэл</span>
          </Link>
        ) : (
          <Login />
        )}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-48 text-white font-bold" align="center">
        <DropdownMenuLabel>Орсон бүртгэл</DropdownMenuLabel>
        <DropdownMenuItem className="pointer-events-none">soko.bbz.4@gmail.com</DropdownMenuItem>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuGroup>
          <Link href={"/account/profile"} className="group">
            <DropdownMenuItem>
              <User className="text-white group-hover:scale-110 transition" /> Хувийн мэдээлэл
            </DropdownMenuItem>
          </Link>
          <Link href={"/account/orders"} className="group">
            <DropdownMenuItem>
              <ClipboardMinus className="text-white group-hover:scale-110 transition" /> Захиалгын мэдээлэл
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-gray-600" />
        <DropdownMenuItem className="focus:bg-red-500 group">
          <LogOut className="text-white group-hover:scale-110 transition" />
          Гарах
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
