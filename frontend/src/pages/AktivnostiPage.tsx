import { useEffect, useState } from "react";
import { fetchActivities } from "../api/util";
import { Aktivnost } from "../types/aktivnost";
import AktivnostiCard from "../components/ui/aktivnosti/AktivnostiCard";
import { FaUsers, FaRunning, FaCalendarAlt } from "react-icons/fa";

function ActivitiesPage() {
  const [selected, setSelected] = useState<
    "klubovi" | "rekreacija" | "dogadanja"
  >("klubovi");
  const [aktivnosti, setAktivnosti] = useState<null | Aktivnost[]>(null);
  const [error, setError] = useState<undefined | string>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getActivities = async () => {
      setIsLoading(true);
      setError(undefined);

      try {
        const response = await fetchActivities(selected);

        if (response.aktivnosti) {
          setAktivnosti(response.aktivnosti);
        } else {
          setError(response.error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    getActivities();
  }, [selected]);

  return (
    <main className="flex-grow p-6 max-w-6xl mx-auto w-full">
      {/* Category Selector */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-lg shadow-sm">
          <button
            onClick={() => setSelected("klubovi")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-l-lg border focus:z-10 transition-colors ${
              selected === "klubovi"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaUsers />
            Klubovi
          </button>
          <button
            onClick={() => setSelected("rekreacija")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-t border-b focus:z-10 transition-colors ${
              selected === "rekreacija"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaRunning />
            Rekreacija
          </button>
          <button
            onClick={() => setSelected("dogadanja")}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-r-lg border focus:z-10 transition-colors ${
              selected === "dogadanja"
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            <FaCalendarAlt />
            Dogadanja
          </button>
        </div>
      </div>

      {/* Content */}
      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aktivnosti?.length ? (
            aktivnosti.map((aktivnost) => (
              <AktivnostiCard key={aktivnost.name} aktivnost={aktivnost} />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              <p className="text-lg">No activities found</p>
              <p className="text-sm">Try selecting a different category</p>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default ActivitiesPage;
