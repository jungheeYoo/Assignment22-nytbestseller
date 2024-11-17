import styles from '../styles/detail.module.css';

interface ICategoryBooksProps {
  rank: number;
  book_image: string;
  title: string;
  author: string;
  amazon_product_url: string;
}

export default function CategoryBooks({
  rank,
  book_image,
  title,
  author,
  amazon_product_url,
}: ICategoryBooksProps) {
  return (
    <li className={styles.card}>
      <img src={book_image} alt={title} />
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardAuthor}>{`by ${author}`}</p>
        <a
          href={amazon_product_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          Purchase
        </a>
      </div>
    </li>
  );
}
