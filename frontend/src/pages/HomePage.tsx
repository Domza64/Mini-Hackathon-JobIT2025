import { useEffect, useState } from "react";
import { useUserData } from "../hooks/useUserData";
import { getGreeting } from "../api/util";
import { FaCalendarAlt, FaUtensils, FaRunning, FaSmile } from "react-icons/fa";

function Home() {
  const { userData } = useUserData();
  const [greeting, setGreeting] = useState("");
  const [greetingText, setGreetingText] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Dobro jutro");
    } else if (hour < 18) {
      setGreeting("Dobar dan");
    } else {
      setGreeting("Dobra večer");
    }

    const getTextGreeting = async () => {
      setIsLoading(true);
      try {
        const { error, text } = await getGreeting();
        if (text) {
          setGreetingText(text);
        } else {
          console.error(error);
          setGreetingText("Dobrodošli na studentsku platformu");
        }
      } finally {
        setIsLoading(false);
      }
    };

    getTextGreeting();
  }, []);

  return (
    <main className="p-6 max-w-6xl mx-auto w-full space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaSmile className="text-blue-600 text-xl" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {greeting},{" "}
              <span className="text-blue-600">{userData?.name}</span>!
            </h1>
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <p className="text-gray-600">{greetingText}</p>
            )}
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="bg-white rounded-xl shadow-sm p-6 border-l-4 border-red-400">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
          <FaCalendarAlt className="text-red-500" />
          Nadolazeći događaji
        </h2>
        <div className="bg-red-50 rounded-lg p-4 text-center text-gray-600">
          Ovdje se prikazuju eventovi koji su uskoro za ovog korisnika
        </div>
      </div>

      {/* Canteen Crowd */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
          <FaUtensils className="text-blue-500" />
          Gužva u menzi
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors">
            <h3 className="font-medium text-gray-700 mb-2">Diadora</h3>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-yellow-500 w-3/4"></div>
              </div>
              <span className="text-sm font-medium">75%</span>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:bg-gray-100 transition-colors">
            <h3 className="font-medium text-gray-700 mb-2">Barbakani</h3>
            <div className="flex items-center gap-3">
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-1/3"></div>
              </div>
              <span className="text-sm font-medium">30%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar and Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
            <FaCalendarAlt className="text-blue-500" />
            Nadolazeće obaveze
          </h2>
          <div className="bg-blue-50 rounded-lg p-4 text-center text-gray-600">
            Prikaz najbližih obaveza iz kalendara
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-800">
            <FaRunning className="text-blue-500" />
            Aktivnosti i rekreacija
          </h2>
          <div className="bg-blue-50 rounded-lg p-4 text-center text-gray-600">
            Prikaz nadolazećih događanja i rekreacija
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
