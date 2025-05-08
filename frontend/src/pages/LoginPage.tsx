import { useEffect, useState } from "react";
import { authenticate } from "../api/auth";
import { useUserData } from "../hooks/useUserData";

export default function LoginPage() {
  const { setUserData } = useUserData();
  const [error, setError] = useState<null | string>("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await authenticate(username);

    if (response.studentId) {
      setUserData({ name: username, id: parseInt(response.studentId) });
    } else {
      setError(response.error || "Unknown error");
    }
  };

  useEffect(() => {
    setError(null);
  }, [username]);

  return (
    <main className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="flex items-center flex-col">
        <h1 className="text-2xl font-bold mb-6">
          Simulation of UNIZD OAuth login
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-80"
        >
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
