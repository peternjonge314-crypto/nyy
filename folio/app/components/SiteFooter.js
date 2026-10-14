import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer className="site-footer wrap">
      <Link className="footer-mark" href="/">am.</Link>
      <p>Thoughtful work, made with care. © {new Date().getFullYear()} Alex Morgan</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
    </footer>
  );
}
