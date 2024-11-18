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
      <div className={styles.rank}>{rank}</div>
      <div className={styles.cardImg}>
        <img className={styles.img} src={book_image} alt={title} />
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>
          <span className={styles.title}>Title</span>
          {title}
        </h3>
        <p className={styles.cardAuthor}>
          <span className={styles.by}>Written by</span>
          {author}
        </p>

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
