import { cn } from '@/app/lib/utilits';

type SectionTitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className='font-mono text-emerald-400'>{`../${subtitle}`}</span>
      <h3 className='text-3xl font-medium'>{title}</h3>
    </div>
  );
};
