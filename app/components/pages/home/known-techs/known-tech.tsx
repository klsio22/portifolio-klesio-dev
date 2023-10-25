import { getRelativeTimeString } from '@/app/ultils/get-relative-time';
import { ReactNode } from 'react';

type KnownTechsProps = {
  tech: {
    icon: ReactNode;
    name: string;
    startDate: string;
  };
};

export const KnownTech = ({ tech }: KnownTechsProps) => {
  const relativeTime = getRelativeTimeString(
    new Date(tech.startDate),
    'pr-BR'
  ).replace('há', '');
  return (
    <div className='p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-500/30 transition-all'>
      <div className='flex items-center justify-between'>
        <p className='font-medium'>{tech.name}</p>
        {tech.icon}
      </div>
      <span>{relativeTime} de experiência</span>
    </div>
  );
};
