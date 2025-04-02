import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaPlus,
  FaList,
  FaFilter,
  FaSync,
  FaUser,
} from "react-icons/fa";

const NavbarSidebar = ({ children }) => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      navigate("/login");
    } else {
      setUsername(storedUsername);
    }
  }, [navigate]);

  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white w-64 h-full fixed top-0 left-0 transition-transform z-40 ${
          menuOpen ? "transform-none" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">Primary Menu</h2>
          <ul className="mt-4 space-y-4">
            <li>
              <Link
                to="/create-transaction"
                className="flex items-center gap-2 hover:text-blue-400"
              >
                <FaPlus /> Create Transaction
              </Link>
            </li>
            <li>
              <Link
                to="/transaction-list"
                className="flex items-center gap-2 hover:text-blue-400"
              >
                <FaList /> List Transactions
              </Link>
            </li>
            <li>
              <Link
                to="/filter-transactions"
                className="flex items-center gap-2 hover:text-blue-400"
              >
                <FaFilter /> Filter Transactions
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          menuOpen ? "ml-64" : "ml-0"
        }`}
      >
        {/* Navbar */}
        <div className="bg-blue-700 text-white p-4 flex justify-between items-center shadow-md">
          <button
            className="text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars />
          </button>
          <h2 className="text-lg font-bold">Oncolab Diagnostics LLC</h2>
          <div className="text-sm">ACCOUNTS1 / CREATE TRANSACTION REPORT</div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.location.reload()}
              className="text-white text-xl hover:text-gray-300"
            >
              <FaSync />
            </button>
            <div className="flex items-center gap-2">
              <FaUser className="text-white text-xl" />
              <span>{username || "Profile"}</span>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default NavbarSidebar;
