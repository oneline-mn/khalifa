"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  const [show, setShow] = useState(false);

  return (
    <section className="max-h-screen">
     <div className="max-w-xl">
      <div className="h-screen overflow-y-scroll overflow-x-hidden py-4 sm:px-10">
        <h1 className="hidden">Login</h1>
        <div className="flex flex-col h-full items-center text-base font-medium">
          <div className="flex flex-col items-center gap-10">
            <Image alt="logo" className="size-16 object-contain" height={64} src={"/logo/logo-icon.svg"} width={64} />
            <h1 className="text-3xl font-bold">Нэвтрэх хэсэг</h1>
          </div>
          <div className="w-full my-14 space-y-7">
            <div className="space-y-3">
              <Label className="text-base">Имэйл хаяг</Label>
              <Input className="bg-white border-input/30 h-12 text-base! font-medium!" type="email" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-base">Нууц үг</Label>
                <Link className="text-brand-orange font-semibold" href={"/profile/password_reset"}>
                  Нууц үгээ мартсан уу?
                </Link>
              </div>
              <div className="relative h-12">
                <Input className="bg-white border-input/30 size-full text-base! font-medium!" type={show ? "text" : "password"} />
                <Button className="absolute top-[50%] -translate-y-[50%] right-2" onClick={() => setShow(!show)} size={"icon"} variant={"naked"}>
                  {show ? <Eye /> : <EyeOff />}
                </Button>
              </div>
            </div>
            <Button className="w-full text-base" size={"xl"} variant={"orange"}>
              Нэвтрэх
            </Button>
          </div>
          <div className="flex flex-col size-full justify-between">
            <div className="flex justify-center gap-4 mt-10">
              <h1>Бүртгүүлээгүй бол ?</h1>
              <Link className="text-brand-orange font-bold" href={"/signup"}>
                Бүртгэл үүсгэх
              </Link>
            </div>
            <div className="flex justify-center gap-4">
              <h1>Хамтран ажиллах</h1>
              <Link className="text-brand-orange font-bold" href={"/signup/company/"}>
                Албан байгууллагаар хүсэлт илгээх
              </Link>
            </div>
            <div className="rounded-lg p-4 lg:p-5 bg-brand-orange/10">
              <Link className="justify-between text-brand-orange" href={"mailto:contact@khalifa.mn"}>
                Албан байгууллагаар бүртгүүлэх бол дээрх хамтран ажиллах дээр даран хүсэлт илгээхээс гадна <span className="font-bold">contact@khalifa.mn</span> руу холбогдон дэлгэрэнгүй мэдээлэл
                аваарай
              </Link>
            </div>
          </div>
        </div>
      </div>
     </div>
     <div className="size-full"></div>
    </section>
  );
}
