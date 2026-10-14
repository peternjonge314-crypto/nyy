import Link from 'next/link';
import Image from 'next/image';

export const metadata = { title: 'About' };

const skills = ['Product strategy', 'Visual identity', 'UX & UI design', 'Prototyping', 'Creative development', 'Design systems'];

export default function AboutPage() {
  return (
    <div className="page-shell wrap">
      <div className="page-heading about-heading">
        <p className="eyebrow"><span className="kicker-line" /> A little introduction</p>
        <h1>Designer by trade.<br /><span>Curious about everything.</span></h1>
      </div>
      <div className="about-layout">
        <div className="about-visual">
          <Image src="/portrait-art.svg" alt="Abstract illustrated portrait of Alex Morgan" width={620} height={760} />
          <span className="visual-caption">Usually sketching something</span>
        </div>
        <div className="about-content">
          <p className="about-lead">I’m Alex Morgan, an independent product designer and creative developer with a soft spot for clear ideas and thoughtful details.</p>
          <p>Over the last eight years, I’ve helped early-stage teams and established brands make digital products easier to understand, more enjoyable to use, and a little more memorable. I like getting close to the problem, asking better questions, and working shoulder-to-shoulder with the people who care about the outcome.</p>
          <p>When I’m not making interfaces, you’ll find me collecting cookbooks, taking the long way home, or trying to keep a houseplant alive.</p>
          <h2 className="small-heading">What I bring to the table</h2>
          <ul className="skill-list">{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
          <Link className="button button-dark about-cta" href="/contact">Let’s make something <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <section className="experience-section">
        <p className="eyebrow">The short version</p>
        <h2 className="small-heading">A few chapters</h2>
        <div className="experience-row"><span>2021 — now</span><strong>Independent designer & developer</strong><span>Working with good people everywhere</span></div>
        <div className="experience-row"><span>2018 — 2021</span><strong>Senior product designer · Northstar</strong><span>Digital products for a better everyday</span></div>
        <div className="experience-row"><span>2016 — 2018</span><strong>Designer · Common Practice</strong><span>Brand, web, and the in-between</span></div>
      </section>
    </div>
  );
}
