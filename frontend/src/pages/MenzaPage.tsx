import { useEffect, useState } from "react";
import {
  FaClock,
  FaUtensils,
  FaChartLine,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { GiMeal } from "react-icons/gi";

export default function MenzaPage() {
  const [selectedMenza, setSelectedMenza] = useState("barbakani");
  const [balance, setBalance] = useState<number | null>(null);
  const [menu, setMenu] = useState<{ [key: string]: string } | null>(null);
  const [crowdData, setCrowdData] = useState<any>(null);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Mock data - replace with actual API calls
  const menze = [
    { id: "barbakani", name: "Barbakani", workingHours: "08:00 - 16:00" },
    { id: "diadora", name: "Diadora", workingHours: "09:00 - 17:00" },
  ];

  const crowdLevels = [
    { time: "08:00", level: 20 },
    { time: "10:00", level: 40 },
    { time: "12:00", level: 90 },
    { time: "14:00", level: 60 },
    { time: "16:00", level: 30 },
  ];

  useEffect(() => {
    const fetchMenzaData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Replace with actual API calls
        // const response = await fetchMenzaInfo(selectedMenza);
        // const crowdResponse = await fetchCrowdData(selectedMenza);
        // const balanceResponse = await fetchCardBalance();

        // Mock data
        setTimeout(() => {
          setBalance(125.5);
          setMenu({
            "Ručak 1": "Pileći odrezak s rižom i povrćem",
            "Ručak 2": "Tjestenina sa šampinjonima",
            Vegeterijanski: "Sirnica sa špinatom",
            Desert: "Voćna salata",
          });
          setCrowdData({
            currentLevel: 65,
            userRatings: 42,
            averageRating: 3.8,
          });
          setIsLoading(false);
        }, 500);
      } catch (err) {
        setError("Failed to load cafeteria data");
        setIsLoading(false);
      }
    };

    fetchMenzaData();
  }, [selectedMenza]);

  const handleRating = (rating: number) => {
    setUserRating(rating);
    // Here you would call API to submit rating
    // await rateCrowdLevel(selectedMenza, rating);
  };

  const getCrowdLevelColor = (level: number) => {
    if (level < 30) return "bg-green-500";
    if (level < 60) return "bg-yellow-500";
    if (level < 80) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <main className="flex-grow p-6 max-w-4xl mx-auto w-full">
      {/* Header */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h1 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <GiMeal className="text-blue-500" />
          Studentska menza
        </h1>

        {/* Card Balance */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h2 className="font-medium text-lg mb-1">Stanje na iksici</h2>
          <p className="text-2xl font-bold">
            {balance !== null ? `${balance.toFixed(2)} kn` : "Loading..."}
          </p>
        </div>
      </div>

      {/* Menza Selection */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Odaberi menzu:</h2>
        <div className="flex flex-wrap gap-3">
          {menze.map((menza) => (
            <button
              key={menza.id}
              onClick={() => setSelectedMenza(menza.id)}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                selectedMenza === menza.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {menza.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menza Info */}
      {!isLoading && (
        <div className="space-y-6">
          {/* Basic Info */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-2 text-gray-600 mb-3">
              <FaClock />
              <span>
                Radno vrijeme:{" "}
                {menze.find((m) => m.id === selectedMenza)?.workingHours}
              </span>
            </div>

            {/* Crowd Level */}
            <div className="mt-4">
              <h3 className="font-medium mb-2">Trenutna gužva:</h3>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getCrowdLevelColor(
                        crowdData?.currentLevel || 0
                      )}`}
                      style={{ width: `${crowdData?.currentLevel || 0}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    {crowdData?.userRatings || 0} korisnika ocijenilo
                  </div>
                </div>
                <div className="text-lg font-medium">
                  {crowdData?.currentLevel || 0}%
                </div>
              </div>

              {/* Rating */}
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Ocijeni gužvu:</h4>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => handleRating(star)}
                      className="text-2xl focus:outline-none"
                    >
                      {userRating && userRating >= star ? (
                        <FaStar className="text-yellow-400" />
                      ) : (
                        <FaRegStar className="text-yellow-400" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaUtensils />
              Dnevni meni
            </h2>
            <div className="space-y-3">
              {menu ? (
                Object.entries(menu).map(([meal, description]) => (
                  <div key={meal} className="border-b pb-3 last:border-0">
                    <h3 className="font-medium text-blue-600">{meal}</h3>
                    <p className="text-gray-700">{description}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">Nema dostupnog menija</p>
              )}
            </div>
          </div>

          {/* Crowd Graph */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaChartLine />
              Gužva po vremenu
            </h2>
            <div className="h-64">
              {/* This would be replaced with an actual chart component */}
              <div className="flex items-end h-48 gap-2 mt-4">
                {crowdLevels.map((data) => (
                  <div
                    key={data.time}
                    className="flex-1 flex flex-col items-center"
                  >
                    <div
                      className={`w-full ${getCrowdLevelColor(
                        data.level
                      )} rounded-t-sm`}
                      style={{ height: `${data.level}%` }}
                    ></div>
                    <span className="text-xs mt-1">{data.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Loading and Error States */}
      {isLoading && (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700">{error}</p>
        </div>
      )}
    </main>
  );
}
