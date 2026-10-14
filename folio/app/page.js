import Link from 'next/link';
import Image from 'next/image';
import ProjectCard from './components/ProjectCard';
import { projects } from './projects';

export default function HomePage() {
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow hero-kicker"><span className="kicker-line" /> Independent designer & developer</p>
          <h1>Making digital things <span>feel a little more human.</span></h1>
          <p className="hero-intro">I’m Alex — a product designer and creative developer partnering with good people to turn thoughtful ideas into useful, beautiful experiences.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/projects">Explore my work <span aria-hidden="true">↗</span></Link>
            <Link className="text-link" href="/about">A little about me <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="hero-art-wrap">
          <div className="hero-art-note note-top">Curious by nature <span>✳</span></div>
          <Image className="hero-art" src="/portrait-art.svg" alt="Abstract illustrated portrait of Alex in a mustard yellow shirt" width={620} height={760} priority />
          <div className="hero-art-note note-bottom"><span className="note-spark">✳</span> Currently in Brooklyn, NY</div>
        </div>
        <a href="#selected-work" className="scroll-cue"><span className="scroll-line" /> Scroll to explore</a>
      </section>

      <section className="work-section section-pad" id="selected-work">
        <div className="wrap">
          <div className="section-heading">
            <div><p className="eyebrow">A few recent favorites</p><h2>Selected work<span className="heading-period">.</span></h2></div>
            <Link className="text-link" href="/projects">View all projects <span aria-hidden="true">→</span></Link>
          </div>
          <div className="project-grid home-project-grid">
            {projects.slice(0, 2).map((project) => <ProjectCard key={project.title} project={project} featured />)}
          </div>
        </div>
      </section>

      <section className="intro-strip wrap">
        <p className="eyebrow">A good fit for</p>
        <p>Kind people, ambitious ideas, and the space to make something that matters.</p>
        <Link className="circle-link" href="/contact" aria-label="Get in touch">↗</Link>
      </section>
    </>
  );
}
