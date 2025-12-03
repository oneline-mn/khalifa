import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LangSwitch() {
  const [lang, setLang] = useState<"mn" | "en">("mn");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex-col items-center px-4 gap-0.5 hidden sm:flex group cursor-pointer group">
          <div className="h-6 flex">
            <Image src={cn("/lang/" + lang + ".png")} width={24} height={20} alt="en" className="object-contain group-hover:scale-110 transition" /> 
          </div>
          <div className="flex items-center">
            <h1 className="uppercase">{lang}</h1>
            <ChevronDown className="size-4" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit font-bold" align="center">
        <DropdownMenuItem className="flex items-center gap-2" onClick={()=> setLang("mn")}>
          <Image src={cn("/lang/mn.png")} width={24} height={20} alt="en" className="object-contain" />
          Mongolian ( MN )
        </DropdownMenuItem>
        <DropdownMenuItem className="flex items-center gap-2" onClick={()=> setLang("en")}>
          <Image src={cn("/lang/en.png")} width={24} height={20} alt="en" className="object-contain" />
          English ( EN )
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
