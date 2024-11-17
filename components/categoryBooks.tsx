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
    <li>
      <div>
        <div>
          <img src={book_image} alt={title} />
          <span>{rank}</span>
        </div>
        <h3>{title}</h3>
        <p>{`by ${author}`}</p>
        <a href={amazon_product_url} target={'_blank'}>
          purchase
        </a>
      </div>
    </li>
  );
}
