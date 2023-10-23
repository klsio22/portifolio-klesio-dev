import { cn } from "@/app/lib/utilits";
import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        "bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-start justify-center gap-2 hover:bg-emerald-500 transition-all disabled:opacity-0",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
