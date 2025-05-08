import { Link } from "react-router-dom";
import SearchBar from "./ui/SearchBar";

export default function header() {
  const user = localStorage.getItem("user");

  const logout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <header className="p-4 w-full border-b-2 border-gray-500">
      <div className="flex items-center justify-between max-w-5xl mx-auto">
        <Link to="/">
          <img src="ssc-logo.svg" alt="Logo platforme" />
        </Link>
        <div className="flex justify-center">
          <SearchBar />
        </div>
        <nav className="flex justify-end">
          <ul className="flex gap-2">
            <li>{user}</li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
