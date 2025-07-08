import React from "react";
import navimg from "../assets/Navbar/navbarimage.png";

function Navbar() {
  return (
    <div className="w-full flex items-center justify-between px-6 py-3 bg-[#FFFFFF] shadow-sm border-b">
      {/* Left section - Logo/Title */}
      <h1 className="text-xl font-semibold text-gray-800">Inventrix</h1>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Search bar */}
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="m21 21-5.2-5.2M16 10a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search anything here"
            className="w-64 px-4 py-2 rounded-full bg-gray-100 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
        </div>

        {/* Bell Icon */}
        <button className="text-gray-600 hover:text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
            />
          </svg>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <img src={navimg} alt="profile" className="w-8 h-8 rounded-full" />
          <span className="text-sm font-medium text-gray-700">Dishant</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
