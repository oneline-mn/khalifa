import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

export default function PageLoader({ dark }: { dark?: boolean }) {
  return (
    <div
      className={cn(
        "w-full flex-center h-[70dvh]",
        dark ? "bg-primary text-white" : "bg-white text-primary"
      )}
    >
      <Loader className="text-inherit animate-spin" />
    </div>
  );
}
