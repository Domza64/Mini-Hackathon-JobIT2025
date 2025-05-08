import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useUserData } from "../../../hooks/useUserData";
import { FaSignOutAlt, FaUserCircle } from "react-icons/fa";

export default function Header() {
  const { userData, logout } = useUserData();

  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="flex items-center justify-between h-full px-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="ssc-logo.svg" alt="Platform Logo" className="h-10 w-auto" />
        </Link>

        {/* Search Bar - Hidden on mobile, visible from md up */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-4">
          <SearchBar />
        </div>

        {/* User Navigation */}
        <nav className="flex items-center gap-4">
          {userData ? (
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 text-gray-700">
                <FaUserCircle className="text-xl" />
                <span className="font-medium">{userData.name}</span>
              </div>

              <button
                onClick={logout}
                className="flex items-center gap-2 px-3 py-2 text-red-600 hover:text-red-800 transition-colors"
                title="Logout"
              >
                <FaSignOutAlt className="text-lg" />
                <span className="sr-only sm:not-sr-only">Logout</span>
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
          )}
        </nav>
      </div>

      {/* Mobile Search Bar - Visible only on mobile */}
      <div className="md:hidden px-4 pb-3">
        <SearchBar />
      </div>
    </header>
  );
}
