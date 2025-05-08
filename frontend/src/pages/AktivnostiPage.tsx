import { useEffect, useState } from "react";
import Activity from "../types/activity";
import { fetchActivities } from "../api/util";

function Home() {
  const [selected, setSelected] = useState<
    "klubovi" | "rekreacija" | "dogadanja"
  >("klubovi");
  const [aktivnosti, setAktivnosti] = useState<null | Activity[]>(null);
  const [error, setError] = useState<undefined | string>(undefined);

  useEffect(() => {
    const getActivities = async () => {
      const response = await fetchActivities(selected);

      if (response.aktivnosti) {
        setAktivnosti(response.aktivnosti);
      } else {
        setError(response.error);
      }
    };

    getActivities();
  }, [selected]);

  return (
    <main className="text-center flex-grow flex flex-col items-center justify-center">
      <div className="underline w-full max-w-md flex justify-between">
        <button
          className={`${selected === "klubovi" && "bg-gray-300"}`}
          onClick={() => setSelected("klubovi")}
        >
          Klubovi
        </button>
        <button
          className={`${selected === "rekreacija" && "bg-gray-300"}`}
          onClick={() => setSelected("rekreacija")}
        >
          Rekreacija
        </button>
        <button
          className={`${selected === "dogadanja" && "bg-gray-300"}`}
          onClick={() => setSelected("dogadanja")}
        >
          Kulturna Dogadanja
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <ul>
        {aktivnosti?.map((a) => (
          <li>{a.title}</li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
