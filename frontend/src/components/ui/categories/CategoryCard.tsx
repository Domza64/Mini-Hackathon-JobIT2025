import { Link } from "react-router-dom";

export default function CategoryCard({
  title,
  url,
  icon,
}: {
  title: string;
  url: string;
  icon?: React.ReactNode;
}) {
  return (
    <li>
      <Link
        to={url}
        className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg group"
      >
        <span className="text-blue-500 group-hover:text-blue-600 transition-colors">
          {icon}
        </span>
        <span className="font-medium">{title}</span>
      </Link>
    </li>
  );
}
