import ProjectCard from '../components/ProjectCard';
import { projects } from '../projects';

export const metadata = { title: 'Selected work' };

export default function ProjectsPage() {
  return (
    <div className="page-shell wrap projects-page">
      <div className="page-heading">
        <p className="eyebrow"><span className="kicker-line" /> Selected collaborations</p>
        <h1>Good ideas, <span>made real.</span></h1>
        <p className="page-intro">A selection of recent work across digital products, identity, and the little details in between.</p>
      </div>
      <div className="project-grid all-project-grid">
        {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
      </div>
      <div className="projects-cta"><p>Have something good in mind?</p><a className="text-link" href="/contact">Let’s talk <span aria-hidden="true">→</span></a></div>
    </div>
  );
}
