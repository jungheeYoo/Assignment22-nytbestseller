import Header from '../components/header';
import Footer from '../components/footer';
import { Metadata } from 'next';
import '../styles/global.css';
import styles from './../styles/home.module.css';

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
        <div className={styles.wrap}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
