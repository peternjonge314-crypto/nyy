import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project, featured = false }) {
  return (
    <article className={`project-card${featured ? ' project-card-featured' : ''}`}>
      <Link className="project-image-link" href="/projects" aria-label={`View ${project.title}`}>
        <Image className="project-image" src={project.image} alt={project.alt} width={900} height={640} />
        <span className="project-arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="project-meta">
        <div>
          <p className="eyebrow">{project.type}</p>
          <h3>{project.title}</h3>
        </div>
        <span className="project-year">{project.year}</span>
      </div>
      <p className="project-description">{project.description}</p>
    </article>
  );
}
