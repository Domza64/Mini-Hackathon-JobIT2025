import { useState } from "react";
import CategoryCard from "./CategoryCard";
import { FiMenu, FiChevronLeft } from "react-icons/fi";
import {
  FaHome,
  FaCalendarAlt,
  FaTasks,
  FaBullhorn,
  FaUtensils,
} from "react-icons/fa";

export default function ModuleSelection() {
  const [shown, setShown] = useState(true);

  return (
    <>
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-screen z-20 flex">
        {shown && (
          <aside className="w-[250px] mt-16 p-4 bg-white border-r border-gray-200 shadow-sm">
            <ul className="space-y-2">
              <CategoryCard
                title="Home"
                url="/"
                icon={<FaHome className="text-lg" />}
              />
              <CategoryCard
                title="Raspored"
                url="/raspored"
                icon={<FaCalendarAlt className="text-lg" />}
              />
              <CategoryCard
                title="Aktivnosti"
                url="/aktivnosti"
                icon={<FaTasks className="text-lg" />}
              />
              <CategoryCard
                title="Oglasi"
                url="/oglasi"
                icon={<FaBullhorn className="text-lg" />}
              />
              <CategoryCard
                title="Menza"
                url="/menza"
                icon={<FaUtensils className="text-lg" />}
              />
            </ul>
          </aside>
        )}

        {/* Toggle Button */}
        <button
          onClick={() => setShown(!shown)}
          className="h-10 px-1 mt-[40vh] flex items-center justify-center bg-blue-200 hover:bg-gray-100 transition-colors rounded-r-lg"
        >
          {shown ? (
            <FiChevronLeft className="text-lg" />
          ) : (
            <FiMenu className="text-lg" />
          )}
        </button>
      </div>

      {/* Spacer for content */}
      {shown && <div className="w-[330px]"></div>}
    </>
  );
}
