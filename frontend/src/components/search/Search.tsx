import { useState, useEffect, useRef } from "react";
import { MeiliSearch, SearchResponse } from "meilisearch";
import { Link } from "react-router-dom";

interface Document {
  id: number;
  url: string;
  title: string;
  text: string;
}

const client = new MeiliSearch({
  host: "http://localhost:7700",
  apiKey: "sup3rS3cur3Mast3rK3y!123",
});

export default function Search() {
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState<Document[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  // @ts-ignore
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Debounced search effect
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout
    timeoutRef.current = setTimeout(async () => {
      try {
        const searchResults: SearchResponse<Document> = await client
          .index("unizd_index")
          .search(query);

        setResults(searchResults.hits);
      } catch (err) {
        setError("Failed to fetch search results");
        console.error("Search error:", err);
      } finally {
        setIsLoading(false);
      }
    }, 300); // 300ms debounce delay

    // Cleanup timeout on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [query]);

  return (
    <div className="w-full p-2 relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search documents..."
        className="w-full py-1 px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-10"
        autoFocus
      />

      <div
        className={`absolute top-full left-0 right-0 z-10 overflow-hidden ${
          results.length === 0
            ? ""
            : "bg-white border-x border-b rounded-lg border-gray-200"
        }`}
      >
        {error && (
          <div className="p-4 text-red-700 bg-red-100 rounded-lg">{error}</div>
        )}
        <div className="space-y-4 p-2 max-h-96 overflow-y-auto">
          {results.map((item) => (
            <Link to={item.url} key={item.id} className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {item.title}
              </h3>
              <p className="text-gray-600 pb-2 border-b border-gray-500">
                {item.text}
              </p>
            </Link>
          ))}
        </div>
        {!isLoading && query && results.length === 0 && (
          <div className="p-4 text-center text-gray-500 bg-red-300 w-full">
            No results found for "{query}"
          </div>
        )}
      </div>
    </div>
  );
}
