import { cn } from '@/app/lib/utilits';
import NextLink from 'next/link';
import { ComponentProps } from 'react';

export const Link = ({
  className,
  children,
  ...props
}: ComponentProps<typeof NextLink>) => {
  return (
    <NextLink
      className={cn(
        'flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors'
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
