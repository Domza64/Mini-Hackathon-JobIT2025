import { useEffect, useState } from "react";
import Oglas from "../types/oglas";
import OglasCard from "../components/ui/oglasi/OglasCard";
import { fetchOglasi } from "../api/util";
import { FaFilter, FaPlus, FaTimes } from "react-icons/fa";
import SearchBar from "../components/ui/oglasi/SearchBar";
import { Link } from "react-router-dom";

export const allCategories = [
  "Cimeri",
  "Izgubljeno/Pronađeno",
  "Pitanja o kolegijima",
  "Smještaj",
  "Off topic",
];

function Home() {
  const [oglasi, setOglasi] = useState<null | Oglas[]>(null);
  const [error, setError] = useState<undefined | string>(undefined);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const getOglasi = async () => {
      const response = await fetchOglasi(selectedCategories);

      if (response.oglasi) {
        setOglasi(response.oglasi.reverse());
      } else {
        setError(response.error);
      }
    };

    getOglasi();
  }, [selectedCategories]);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <main className="flex-grow flex flex-col px-4 py-6 max-w-7xl mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="w-full md:w-1/2">
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="flex gap-3 w-full md:w-auto">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <FaFilter />
            <span>
              Filters{" "}
              {selectedCategories.length > 0 &&
                `(${selectedCategories.length})`}
            </span>
          </button>

          <Link
            to="/oglasi/new"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FaPlus />
            <span>Nova objava</span>
          </Link>
        </div>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="bg-white p-4 rounded-lg shadow-md mb-6 border border-gray-200">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium text-lg">Filter by Category</h3>
            <button
              onClick={() => setShowFilters(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <FaTimes />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  selectedCategories.includes(category)
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}

            {selectedCategories.length > 0 && (
              <button
                onClick={() => setSelectedCategories([])}
                className="ml-auto text-sm text-blue-600 hover:text-blue-800"
              >
                Clear all
              </button>
            )}
          </div>
        </div>
      )}

      {/* Content */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {oglasi == null ? (
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-pulse text-gray-500">Loading...</div>
        </div>
      ) : (
        <>
          {oglasi?.length === 0 ? (
            <div className="flex-grow flex flex-col items-center justify-center text-gray-500 py-12">
              <p className="text-lg mb-2">No posts found</p>
              <p className="text-sm">
                Try adjusting your filters or search query
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {oglasi?.map((o: Oglas) => (
                <OglasCard key={o.id} oglas={o} />
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default Home;
