import { useState } from "react";
import CategoryCard from "./CategoryCard";

export default function ModuleSelection() {
  const [shown, setShown] = useState(true);

  return (
    <div className="flex items-center h-screen">
      {shown && (
        <aside className="w-[300px] z-10 p-4 shadow-md shadow-gray-300">
          <ul>
            <li className="flex flex-col gap-4">
              <CategoryCard title="Home" url="/" />
              <CategoryCard title="About" url="/about" />
              <CategoryCard title="Some page" url="/some-page" />
            </li>
          </ul>
        </aside>
      )}
      <button
        onClick={() => setShown(!shown)}
        className="bg-blue-300 hover:bg-blue-500 transition-colors px-1 py-3 max-h-min"
      >
        B
      </button>
    </div>
  );
}
