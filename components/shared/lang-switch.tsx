import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function LangSwitch() {
  const [lang, setLang] = useState<"en" | "mn">("mn");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex-col items-center px-4 gap-0.5 flex group cursor-pointer group">
          <div className="h-6 flex">
            <Image
              alt="en"
              className="object-contain group-hover:scale-110 transition"
              height={20}
              src={cn("/lang/" + lang + ".png")}
              width={24}
            />
          </div>
          <div className="flex items-center">
            <h1 className="uppercase">{lang}</h1>
            <ChevronDown className="size-4" />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-fit font-bold">
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => setLang("mn")}
        >
          <Image
            alt="en"
            className="object-contain"
            height={20}
            src={cn("/lang/mn.png")}
            width={24}
          />
          Mongolian ( MN )
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex items-center gap-2"
          onClick={() => setLang("en")}
        >
          <Image
            alt="en"
            className="object-contain"
            height={20}
            src={cn("/lang/en.png")}
            width={24}
          />
          English ( EN )
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
