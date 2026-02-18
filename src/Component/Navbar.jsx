import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/dnalogo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="DNA Logo" className="w-[56px] h-auto" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            DNA Classes
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Links */}
        <div className={`${open ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800">
            <li>
              <Link
                to="/Createform"
                className="block py-2 px-3 rounded-sm text-green-700 hover:bg-green-100 md:hover:bg-transparent md:hover:text-green-800 md:p-0"
              >
                Fill Form
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
 export default Navbar