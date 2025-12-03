"use client";

import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import PasswordInput from "@/components/shared/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  const [show, setShow] = useState(false);

  return (
    <section className="max-h-screen flex max-w-screen overflow-hidden">
      <div className="max-w-xl">
        <div className="h-screen overflow-y-scroll overflow-x-hidden py-6 sm:px-10">
          <h1 className="hidden">Login</h1>
          <div className="flex flex-col h-full items-center text-base font-medium">
            <div className="flex flex-col items-center gap-10">
              <Image alt="logo" className="h-12 object-contain" height={48} src={"/logo/logo-dark.svg"} width={300} />
              <h1 className="text-3xl font-bold">Бүртгэл үүсгэх</h1>
            </div>

            {/* Form */}
            <form action={""} className="w-full space-y-7 mt-10">
              {/* Email */}
              <div className="space-y-3">
                <Label className="text-base">Имэйл хаяг</Label>
                <Input className="bg-white border-input/30 h-12 text-base! font-medium!" required type="email" />
              </div>

              {/* Password */}
              <div className="space-y-3">
                <Label className="text-base">Нууц үг</Label>
                <PasswordInput />
              </div>

              {/* Confirm Password */}
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label className="text-base">Нууц үг</Label>
                  <p className="text-red-600 text-xs">/ Баталгаажуулах зорилгоор өмнө оруулсан нууц үгээ дахин оруулна уу /</p>
                </div>
                <PasswordInput />
              </div>
              <Button className="w-full text-base" size={"xl"} type="submit" variant={"orange"}>
                Нэвтрэх
              </Button>
            </form>
            <div className="flex flex-col size-full justify-between">
              <div className="flex justify-center gap-4 mt-10">
                <h1>Надад бүртгэлтэй хаяг бий.</h1>
                <Link className="text-brand-orange font-bold" href={"/profile/login"}>
                  Нэвтрэх
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
      <div className="size-full bg-accent"></div>
    </section>
  );
}
