import Link from 'next/link';
import AllCategory from '../../components/allCategory';

export const metadata = {
  title: 'Home',
};

export const URL = 'https://books-api.nomadcoders.workers.dev/lists';

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
            <AllCategory
              key={list.list_name_encoded}
              display_name={list.display_name}
              list_name_encoded={list.list_name_encoded}
            />
          ))}
        </ul>
      ) : (
        <p>리스트가 없습니다</p>
      )}
    </div>
  );
}
