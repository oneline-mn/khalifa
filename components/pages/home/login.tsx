import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, UserRound, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [openSign, setOpenSign] = useState(false);
  const [show, setShow] = useState(false)

  return (
    <Drawer open={openSign} onOpenChange={setOpenSign} direction="right">
      <DrawerTrigger asChild>
        <div className="flex-col items-center px-4 gap-0.5 hidden sm:flex group cursor-pointer">
          <UserRound className="size-5 duration-150 group-hover:scale-120" />
          <span>Нэвтрэх</span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-screen overflow-y-scroll overflow-x-hidden py-4 sm:px-10">
        <Button variant={"naked"} size={"icon"} className="absolute top-6 right-6">
          <X className="stroke-primary size-7" />
        </Button>
        <DrawerTitle className="hidden">Login</DrawerTitle>
        <div className="flex flex-col h-full items-center text-base font-medium">
          <div className="flex flex-col items-center gap-10">
            <Image src={"/logo/logo-icon.svg"} width={64} height={64} className="size-16 object-contain" alt="logo" />
            <h1 className="text-3xl font-bold">Нэвтрэх хэсэг</h1>
          </div>
          <div className="w-full my-14 space-y-7">
            <div className="space-y-3">
              <Label className="text-base">Имэйл хаяг</Label>
              <Input type="email" className="bg-white border-input/30 h-12 text-base! font-medium!" />
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Label className="text-base">Нууц үг</Label>
                <Link href={"/profile/password_reset"} className="text-brand-orange font-semibold">
                  Нууц үгээ мартсан уу?
                </Link>
              </div>
             <div className="relative h-12">
               <Input type={show ? "text" : "password"} className="bg-white border-input/30 size-full text-base! font-medium!" />
               <Button variant={'naked'} size={'icon'} className="absolute top-[50%] -translate-y-[50%] right-2" onClick={()=> setShow(!show)}>
               {show ?  <Eye /> : <EyeOff />}
               </Button>
             </div>
            </div>
            <Button size={"xl"} variant={"orange"} className="w-full text-base">
              Нэвтрэх
            </Button>
          </div>
          <div className="flex flex-col size-full justify-between">
            <div className="flex justify-center gap-4 mt-10">
              <h1>Бүртгүүлээгүй бол ?</h1>
              <Link href={"/signup"} className="text-brand-orange font-bold">
                Бүртгэл үүсгэх
              </Link>
            </div>
            <div className="flex justify-center gap-4">
              <h1>Хамтран ажиллах</h1>
              <Link href={"/signup/company/"} className="text-brand-orange font-bold">
                Албан байгууллагаар хүсэлт илгээх
              </Link>
            </div>
            <div className="rounded-lg p-4 lg:p-5 bg-brand-orange/10">
              <Link href={"mailto:contact@khalifa.mn"} className="justify-between text-brand-orange">
                Албан байгууллагаар бүртгүүлэх бол дээрх хамтран ажиллах дээр даран хүсэлт илгээхээс гадна <span className="font-bold">contact@khalifa.mn</span> руу холбогдон дэлгэрэнгүй мэдээлэл
                аваарай
              </Link>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
