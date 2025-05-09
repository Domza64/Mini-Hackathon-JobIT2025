import { useState } from "react";
import { fetchActivities, fetchOglasi } from "../api/util";
//@ts-ignore - Need to install types or sm for this to not give ts error
import { MeiliSearch } from "meilisearch";
import AddEventForm from "../components/temporary-test/AddEventForm";
import EventsTable from "../components/temporary-test/AllEventDisplay";

export default function TestPage() {
  const [error, setError] = useState("");

  const createIndexes = async () => {
    try {
      const response = await fetchOglasi();
      const response2 = await fetchActivities("klubovi");
      const response3 = await fetchActivities("rekreacija");
      const response4 = await fetchActivities("dogadanja");

      if (response.oglasi) {
        var staticUrl = "/oglasi";

        var id = 0;
        var updatedOglasi = response.oglasi.map((oglasi) => ({
          id: id++,
          title: oglasi.title,
          text: oglasi.text,
          url: staticUrl,
          type: "oglasi",
        }));

        var staticUrl = "/aktivnosti?type=klubovi";
        const test = response2.aktivnosti?.map((aktivnosti) => ({
          id: id++,
          title: aktivnosti.name,
          text: aktivnosti.description,
          url: staticUrl,
          type: "klubovi",
        }));
        if (test) {
          updatedOglasi.push(...test);
        }

        var staticUrl = "/aktivnosti?type=rekreacija";
        const test2 = response3.aktivnosti?.map((aktivnosti) => ({
          id: id++,
          title: aktivnosti.name,
          text: aktivnosti.description,
          url: staticUrl,
          type: "rekreacija",
        }));
        if (test2) {
          updatedOglasi.push(...test2);
        }

        var staticUrl = "/aktivnosti?type=dogadanja";
        const test3 = response4.aktivnosti?.map((aktivnosti) => ({
          id: id++,
          title: aktivnosti.name,
          text: aktivnosti.description,
          url: staticUrl,
          type: "kulturna dogadanja",
        }));
        if (test3) {
          updatedOglasi.push(...test3);
        }

        const client = new MeiliSearch({
          host: "http://127.0.0.1:7700",
          apiKey: "sup3rS3cur3Mast3rK3y!123", // This is ok for now...
        });
        const index = client.index("unizd_index");
        await index.deleteAllDocuments();
        await index.addDocuments(updatedOglasi);

        console.log("Documents added to Meilisearch.");
      } else {
        setError(response.error || "Error creating indexes");
      }
    } catch (error) {
      console.error("Error:", error);
      setError(
        error instanceof Error
          ? error.message
          : "An error occurred while creating indexes"
      );
    }
  };

  return (
    <main className="p-6 max-w-6xl mx-auto w-full space-y-6">
      <h1>ADMIN TEST PAGE THING</h1>
      {error && <p className="text-red-500">{error}</p>}
      <button className="bg-blue-200 p-3" onClick={createIndexes}>
        CREATE INDEXES
      </button>
      <AddEventForm />
      <hr />
      <EventsTable />
    </main>
  );
}
