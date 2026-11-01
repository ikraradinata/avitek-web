import * as React from "react";
import { fieldControlClass } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(fieldControlClass, "min-h-[90px] resize-y", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export { Textarea };
