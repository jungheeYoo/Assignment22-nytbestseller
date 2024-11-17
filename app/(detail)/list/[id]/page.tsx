import { API_URL } from '../../../contants';

export async function getBooksInCategory(name: string) {
  const response = await fetch(`${API_URL}/list?name=${name}`);
  return response.json();
}

interface IParams {
  params: { id: string };
}

export async function getBooksInCategoryMetadata({ params: { id } }: IParams) {
  const bookList = await getBooksInCategory(id);
  return {
    title: bookList.list_name || 'Book Category',
  };
}

export default async function BookDetail({ params: { id } }: IParams) {
  const booksData = await getBooksInCategory(id);

  return (
    <div>
      <h1>타이틀</h1>
      <ul>
        {booksData.results.books.map((book) => (
          <li key={book.rank}>
            <div>
              <div>
                <img src={book.book_image} alt={book.title} />
                <span>{book.rank}</span>
              </div>
              <h3>{book.title}</h3>
              <p>{`by. ${book.author}`}</p>
              <a href={book.amazon_product_url} target={'_blank'}>
                purchase
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
