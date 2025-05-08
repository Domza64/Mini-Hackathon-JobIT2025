import { Aktivnost } from "../../../types/aktivnost";
import { FaPhone, FaCalendarDay, FaInfoCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function AktivnostiCard({
  aktivnost,
}: {
  aktivnost: Aktivnost;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="h-48 bg-gray-200 overflow-hidden">
        {aktivnost.imageUrl ? (
          <img
            src={aktivnost.imageUrl}
            alt={aktivnost.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <FaInfoCircle size={48} />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          {aktivnost.name}
        </h3>

        <p className="text-gray-600 mb-4 flex-grow">
          {aktivnost.description || "No description available"}
        </p>

        {/* Date */}
        {aktivnost.date && (
          <div className="flex items-center text-gray-500 mb-3">
            <FaCalendarDay className="mr-2" />
            <span>
              {new Date(aktivnost.date).toLocaleDateString("hr-HR", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
        )}

        {/* Contacts */}
        <div className="mt-auto pt-4 border-t">
          <h4 className="text-sm font-medium text-gray-500 mb-2">Contacts:</h4>
          <ul className="space-y-1">
            {aktivnost.contacts?.map((contact, index) => (
              <li key={index} className="flex items-center text-sm">
                {contact.includes("@") ? (
                  <>
                    <MdEmail className="mr-2 text-gray-400" />
                    <a
                      href={`mailto:${contact}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contact}
                    </a>
                  </>
                ) : (
                  <>
                    <FaPhone className="mr-2 text-gray-400" />
                    <a
                      href={`tel:${contact}`}
                      className="text-blue-600 hover:underline"
                    >
                      {contact}
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
