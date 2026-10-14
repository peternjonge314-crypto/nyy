import './globals.css';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';

export const metadata = {
  title: {
    default: 'Alex Morgan — Product designer & creative developer',
    template: '%s — Alex Morgan',
  },
  description:
    'Alex Morgan is an independent product designer and creative developer building thoughtful digital experiences.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
