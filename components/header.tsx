'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/header.module.css';

export default function Header() {
  const path = usePathname();
  return (
    <nav className={styles.wrap}>
      <ul className={styles.menu__wrap}>
        <li className={`${path === '/' ? styles.active : ''}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`${path === '/about' ? styles.active : ''}`}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
