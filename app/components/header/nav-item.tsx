'use client';

import { cn } from "@/app/lib/utilits";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  label: string;
  href: string;
};

export const NavItem = ({ label, href }: NavItemProps) => {
  const pathname = usePathname();

  const isAtive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "text-gray-400 flex items-center gap-2 font-medium font-mono",
        isAtive && "text-gray-50"
      )}
    >
      <span className="text-emerald-400">#</span>
      {label}
    </Link>
  );
};
