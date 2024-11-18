import styles from '../../styles/about.module.css';

export const metadata = {
  title: 'About',
};

export default function About() {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>🎅 About us!</h2>
      <p>
        Welcome to the official explorer for The New York Times Best Seller list
        explorer. We hope you enjoy your stay!
      </p>
    </div>
  );
}
