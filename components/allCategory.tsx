import Link from 'next/link';
import styles from '../styles/home.module.css';

interface IAllCategoryProps {
  display_name: string;
  list_name_encoded: string;
}

export default function AllCategory({
  display_name,
  list_name_encoded,
}: IAllCategoryProps) {
  return (
    <li className={styles.category__lists}>
      <Link href={`/list/${list_name_encoded}`}>{display_name}</Link>
    </li>
  );
}
