import React from "react";

export default function SignContainer({ children }: { children: React.ReactNode }) {
  return (
    <section className="h-screen flex w-full overflow-x-hidden">
      <div className="max-w-xl w-full p-6 sm:px-10 mx-auto">{children}</div>
      <div className="size-full bg-accent hidden lg:block"></div>
    </section>
  );
}
