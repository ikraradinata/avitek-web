import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex cursor-pointer items-center gap-2.5 rounded-full border-2 border-transparent px-[22px] py-3.5 text-base font-bold no-underline transition-colors disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        // Teks wajib navy: teks putih di atas oranye hanya 2,8:1
        cta: "bg-orange text-navy hover:bg-orange-hover",
        dark: "bg-navy text-white hover:bg-navy-2",
        ghost: "border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
      },
    },
    defaultVariants: { variant: "cta" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant }), className)}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
