import { Link } from "react-router-dom";

export default function CategoryCard({
  title,
  url,
}: {
  title: string;
  url: string;
}) {
  return (
    <Link
      to={url}
      className="w-full h-[60px] flex justify-center items-center bg-gray-300 hover:bg-gray-400 transition-colors rounded-lg"
    >
      {title}
    </Link>
  );
}
