import Link from 'next/link';

const links = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Work' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  return (
    <header className="site-header wrap">
      <Link className="wordmark" href="/" aria-label="Alex Morgan home">
        am<span>.</span>
      </Link>
      <nav className="primary-nav" aria-label="Main navigation">
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <a className="availability" href="mailto:hello@alexmorgan.design">
        <span className="availability-dot" /> Available for select projects
      </a>
    </header>
  );
}
