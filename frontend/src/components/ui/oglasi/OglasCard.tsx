import Oglas from "../../../types/oglas";
import { FaUser, FaPhone, FaIdBadge, FaCalendarAlt } from "react-icons/fa";

export default function OglasCard({ oglas }: { oglas: Oglas }) {
  // Format the date to a more readable format
  const formattedDate = oglas.date
    ? new Date(oglas.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "No date specified";

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex items-center text-gray-500 text-sm mb-2">
          <FaIdBadge className="mr-1" />
          <span>Post #{oglas.id}</span>
        </div>

        <p className="text-gray-800 text-lg mb-1">{oglas.title}</p>
        <p className="mb-4 text-gray-600">{oglas.text}</p>

        {oglas.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {oglas.categories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        )}

        <div className="border-t pt-4 mt-4">
          <div className="flex items-center text-gray-600 mb-2">
            <FaUser className="mr-2" />
            <span className="font-medium">{oglas.postedBy}</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <FaPhone className="mr-2" />
            <span>{oglas.contact}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <FaCalendarAlt className="mr-2" />
            <span>{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
