import Link from 'next/link';

interface IAllCategoryProps {
  display_name: string;
  list_name_encoded: string;
}

export default function AllCategory({
  display_name,
  list_name_encoded,
}: IAllCategoryProps) {
  return (
    <li>
      <Link href={`/list/${list_name_encoded}`}>{display_name}</Link>
    </li>
  );
}
