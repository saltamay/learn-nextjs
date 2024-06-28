import { type ComponentPropsWithoutRef } from "react";

export function Heading01(props: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className="text-2xl py-4 font-bold leading-none tracking-tight text-white md:text-3xl lg:text-4xl"
      {...props}
    />
  );
}
export function Heading02(props: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className="text-xl py-4 font-bold leading-none tracking-tight text-white md:text-5xl lg:text-3xl"
      {...props}
    />
  );
}
