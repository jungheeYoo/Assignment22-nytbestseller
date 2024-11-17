import AllCategory from '../../components/allCategory';
import { API_URL } from '../contants';

export const metadata = {
  title: 'Home',
};

export async function getCategoryLists() {
  const response = await fetch(`${API_URL}/lists`);
  const json = await response.json();
  return json.results || [];
}

export default async function HomePage() {
  const categoryLists = await getCategoryLists();
  return (
    <div>
      {categoryLists.length > 0 ? (
        <ul>
          {categoryLists.map((list) => (
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
