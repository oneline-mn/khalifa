import { FOOTER_ITEMS, NAV_ITEMS, SOCIALS } from "@/constants";
import { Separator } from "../ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Mail, Smartphone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-2k w-full mx-auto py-7 md:py-8 px-5 lg:px-10 gap-8 flex flex-col">
        <Separator />
        <div className="flex items-center justify-between">
          <Image src={"/"} alt="Khalifa logo" width={200} height={100} className="h-12 object-contain bg-white/10" />
          <div className="flex items-center gap-3 lg:hidden">
            {SOCIALS.map((social, i) => {
              const Icon = social.icon;
              return (
                <Link key={i} href={social.href} target="_blank" rel="noopener noreferrer">
                  <Icon className="fill-current size-5" />
                </Link>
              );
            })}
          </div>
        </div>
        <div className="grid grid-cols-4 md:grid-cols-7 text-sm lg:text-base font-semibold font-manrope gap-y-6">
          <div className="col-span-full md:col-span-2 flex flex-col">
            <Link href={"tel:+97675990007"} className="flex items-center gap-2 group py-2.5">
              <Smartphone className="size-5" />
              <span className="text-white/60 group-hover-float">+976 7599-0007</span>
            </Link>
            <Link href={"mailto:contact@khalifa.mn"} className="flex items-center gap-2 group py-0.5">
              <Mail className="size-5" />
              <span className="text-white/60 group-hover-float">contact@khalifa.mn</span>
            </Link>
          </div>
          <div className="col-span-2 flex flex-col text-nowrap text-white/60">
            {NAV_ITEMS.map((item, i) => {
              return (
                <Link key={i} href={item.href} className="text-inherit hover:text-white hover-float py-2.5" scroll={true}>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          <div className="col-span-2 flex flex-col mt-auto text-white/60">
            {FOOTER_ITEMS.map((item, i) => {
              return (
                <Link key={i} href={"/"} className="text-inherit hover:text-white hover-float py-2.5">
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="col-span-1 lg:flex flex-col hidden">
            {SOCIALS.map((social, i) => {
              const Icon = social.icon;
              return (
                <Link key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group py-2.5">
                  <Icon className="fill-current size-5" />
                  <span className="group-hover-float">{social.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
        <Separator />

        <p className="font-medium text-sm text-center sm:text-left text-white">© 2025 Khalifa LLC. All rights reserved.</p>
      </div>
    </footer>
  );
}
