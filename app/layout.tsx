import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/global.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Best Sellers',
    default: 'Best Sellers',
  },
  description: 'all best sellers lists',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
