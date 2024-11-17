import Link from 'next/link';

export const metadata = {
  title: 'Home',
};

const URL = 'https://books-api.nomadcoders.workers.dev/lists';

async function getCategoryLists() {
  const response = await fetch(URL);
  const json = await response.json();
  return json.results || [];
}

export default async function HomePage() {
  const bookLists = await getCategoryLists();
  return (
    <div>
      {bookLists.length > 0 ? (
        <ul>
          {bookLists.map((list) => (
            <li key={list.list_name_encoded}>
              <Link href={`/lists/${list.list_name_encoded}`}>
                {list.display_name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>리스트가 없습니다</p>
      )}
    </div>
  );
}
