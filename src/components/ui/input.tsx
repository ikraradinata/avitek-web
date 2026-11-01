import * as React from "react";
import { cn } from "@/lib/utils";

// Dipakai bersama oleh input, textarea, dan select
export const fieldControlClass =
  "w-full rounded-[10px] border-[1.5px] border-mist bg-white px-3.5 py-3 text-base text-navy focus:border-teal focus:outline-none focus:ring-[3px] focus:ring-teal-soft";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input ref={ref} className={cn(fieldControlClass, className)} {...props} />
));
Input.displayName = "Input";

export { Input };
