interface NavCountItemProps {
  label: string;
  icon: React.ReactNode;
  count?: number;
  isMobile?: boolean;
}

export function NavCountItem({
  label,
  icon,
  count = 0,
  isMobile = false,
}: NavCountItemProps) {
  return (
    <>
      {isMobile ? (
        <>
          <span className="flex items-center gap-2">
            {icon}
            <span className="text-2xl">{label}</span>
          </span>
          <span className="bg-brand text-white rounded-full px-3 text-base">
            {count}
          </span>
        </>
      ) : (
        <>
          <span className="relative">
            {icon}
            {count !== 0 && (
              <span className="bg-brand w-4 h-3 group-hover:scale-110 duration-150 flex items-center justify-center absolute -top-1 -right-2.5 rounded-full">
                <span className="text-[10px] font-bold leading-none">2</span>
              </span>
            )}
          </span>
          <span className="hidden sm:block font-bold">{label}</span>
        </>
      )}
    </>
  );
}
