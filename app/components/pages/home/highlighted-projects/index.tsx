import { HorizontalDivider } from '@/app/components/divider/horizontal';
import { SectionTitle } from '@/app/components/section-title';
import { ProjectCard } from './project-card';

export const HighlightedProjects = () => {
  return (
    <section className='container py-16'>
      <SectionTitle subtitle='destaque' title='projetos em destaque' />
      <HorizontalDivider className='mb-16' />

      <div className='flex flex-col gap-10'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </section>
  );
};
