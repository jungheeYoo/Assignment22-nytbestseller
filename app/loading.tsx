import styles from '../styles/loading.module.css';

export default function Loading() {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Loading...</h2>
      <p>Please wait...</p>
    </div>
  );
}
