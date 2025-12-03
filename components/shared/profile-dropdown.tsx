import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ClipboardMinus, LogOut, User, UserRound } from "lucide-react";
import Link from "next/link";

export default function ProfileDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Link href={"/profile"} className="flex-col items-center px-4 gap-0.5 hidden sm:flex group">
          <UserRound className="size-5 duration-150 group-hover:scale-120" />
          <span>Миний бүртгэл</span>
        </Link>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-48 font-bold" align="center">
        <DropdownMenuLabel>Орсон бүртгэл</DropdownMenuLabel>
        <DropdownMenuItem className="pointer-events-none">soko.bbz.4@gmail.com</DropdownMenuItem>
        <DropdownMenuSeparator className="bg-slate-600" />
        <DropdownMenuGroup>
          <Link href={"/account/profile"}>
            <DropdownMenuItem className="font-bold hover:bg-slate-400">
              <User className="text-white" /> Хувийн мэдээлэл
            </DropdownMenuItem>
          </Link>
          <Link href={"/account/orders"}>
            <DropdownMenuItem className="font-bold">
              <ClipboardMinus className="text-white" /> Захиалгын мэдээлэл
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator className="bg-slate-600" />
        <DropdownMenuItem className="font-bold"><LogOut className="text-white" />Гарах</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
