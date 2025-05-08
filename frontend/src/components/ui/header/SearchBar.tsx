export default function SearchBar() {
  return (
    <div className="flex items-center gap-2 border border-gray-400 rounded-lg p-2">
      <img src="icons/search.svg" alt="Search" />
      <input type="text" placeholder="todo - meiliesarch" />
    </div>
  );
}
