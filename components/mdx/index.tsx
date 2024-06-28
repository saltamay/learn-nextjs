import { type ComponentPropsWithoutRef } from "react";

export function Paragraph(props: ComponentPropsWithoutRef<"p">) {
  return <p className="py-2" {...props} />;
}
