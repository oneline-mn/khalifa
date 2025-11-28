import { cn } from "@/lib/utils";

export function HeartIcon({ size, className }: { size?: string; color?: string; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={cn("fill-white size-10", className, size)}>
      <path d="m11.645 20.91-.007-.003-.022-.012-.082-.045q-.108-.06-.301-.173a25.2 25.2 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25 25 0 0 1-4.244 3.17 15 15 0 0 1-.383.219l-.022.012-.007.004-.003.001a.75.75 0 0 1-.704 0z" />
    </svg>
  );
}

export function CartIcon({ size, className }: { size?: string; color?: string; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={cn("fill-white size-10", className, size)}>
      <path d="M1.75 1.002a.75.75 0 1 0 0 1.5h1.835l1.24 5.113A3.75 3.75 0 0 0 2 11.25c0 .414.336.75.75.75h10.5a.75.75 0 0 0 0-1.5H3.628A2.25 2.25 0 0 1 5.75 9h6.5a.75.75 0 0 0 .73-.578l.846-3.595a.75.75 0 0 0-.578-.906a44 44 0 0 0-7.996-.91l-.348-1.436a.75.75 0 0 0-.73-.573zM5 14a1 1 0 1 1-2 0a1 1 0 0 1 2 0m8 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
    </svg>
  );
}

export function UserIcon({ size, className }: { size?: string; color?: string; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className={cn("fill-white size-10", className, size)}>
      <path d="M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m4.735 6c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139z" />
    </svg>
  );
}
