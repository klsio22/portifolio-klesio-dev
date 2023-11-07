import { HorizontalDivider } from '@/app/components/divider/horizontal';
import { SectionTitle } from '@/app/components/section-title';
import { ProjectCard } from './project-card';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from '@/app/components/link';

export const HighlightedProjects = () => {
  return (
    <section className='container py-16'>
      <SectionTitle subtitle='destaque' title='projetos em destaque' />
      <HorizontalDivider className='mb-16' />

      <div className='flex flex-col'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />

        <p className='flex items-center gap-1.5'>
          <span className='text-gray-400'>Se interessou?</span>
          <Link href={'/projects'}>
            Ver todos
            <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
};
