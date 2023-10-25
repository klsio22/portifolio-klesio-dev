import { TechBadge } from '@/app/components/tech-badge';
import Image from 'next/image';

export const ProjectCard = () => {
  return (
    <div className='flex gap-6 lg:gap-12 flex-col lg:flex-row'>
      <div className='w-full h-full'>
        <Image
          width={420}
          height={304}
          src='/images/barion-store.png'
          alt='Loja Barion'
          className='w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg'
        />
      </div>

      <div>
        <h3 className='flex items-center gap-3 font-medium text-lg text-gray-50'>
          <Image
            width={20}
            height={20}
            alt=''
            src='/images/icons/project-title-icon.svg'
          />
          Loja Barion
        </h3>

        <p className='text-gray-400 my-6'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum,
          voluptatem! Esse quisquam sed fuga dicta nihil illum illo,
          consequuntur veniam inventore, vitae quam? Impedit rerum provident hic
          minus commodi illo!
        </p>

        <div className='flex gap-x-2 gap-y-3 mb-8 lg:max-w-[350px]'>
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
          <TechBadge name='Next.js' />
        </div>
      </div>
    </div>
  );
};
