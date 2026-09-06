import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-opacity duration-[var(--motion-quick,150ms)] ease-[var(--ease-out)] disabled:pointer-events-none disabled:opacity-40 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-fg text-bg hover:opacity-90 active:scale-[0.98] rounded-md px-4 min-h-11 text-sm",
        secondary:
          "bg-raised text-fg shadow-[inset_0_0_0_1px_var(--color-rule)] hover:bg-paper rounded-md px-4 min-h-11 text-sm",
        ghost:
          "bg-transparent text-fg hover:bg-raised rounded-md px-3 min-h-11 text-sm",
        gulf: "bg-gulf text-gulf-fg hover:opacity-90 active:scale-[0.98] rounded-md px-4 min-h-11 text-sm",
      },
      size: {
        default: "",
        sm: "min-h-9 px-3 text-xs rounded-sm",
        icon: "size-11 p-0 rounded-md",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
