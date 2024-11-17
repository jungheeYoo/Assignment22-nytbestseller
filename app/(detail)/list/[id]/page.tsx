import CategoryBooks from '../../../../components/categoryBooks';
import { API_URL } from '../../../contants';

async function getBooksInCategory(name: string) {
  const response = await fetch(`${API_URL}/list?name=${name}`);
  return response.json();
}

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const bookList = await getBooksInCategory(id);
  return {
    title: bookList.results.list_name || 'Book Category',
  };
}

export default async function BookDetail({ params: { id } }: IParams) {
  const booksData = await getBooksInCategory(id);

  return (
    <div>
      <h1>타이틀</h1>
      <ul>
        {booksData.results.books.map((book) => (
          <CategoryBooks
            key={book.rank}
            rank={book.rank}
            book_image={book.book_image}
            title={book.title}
            author={book.author}
            amazon_product_url={book.amazon_product_url}
          />
        ))}
      </ul>
    </div>
  );
}
