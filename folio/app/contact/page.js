import Link from 'next/link';

export const metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <div className="contact-page wrap">
      <div className="contact-copy">
        <p className="eyebrow"><span className="kicker-line" /> The next good thing</p>
        <h1>Have a project<br />in <span>mind?</span></h1>
        <p className="contact-intro">I’d love to hear what you’re thinking about. Tell me a little about it and I’ll get back to you soon.</p>
        <a className="contact-email" href="mailto:hello@alexmorgan.design">hello@alexmorgan.design <span aria-hidden="true">↗</span></a>
        <div className="contact-socials">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>
      <div className="contact-stamp" aria-hidden="true"><span>LET’S MAKE</span><strong>GOOD<br />THINGS</strong><span>TOGETHER ✳</span></div>
      <Link className="contact-back" href="/projects">Or take another look at the work <span aria-hidden="true">→</span></Link>
    </div>
  );
}
