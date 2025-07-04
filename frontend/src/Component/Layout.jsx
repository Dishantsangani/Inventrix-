import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex">
        <div
          className={`fixed z-20 top-0 left-0 h-full w-64  text-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-all ease-in-out duration-300 lg:translate-x-0 lg:relative lg:w-6`}
        >
          {/* <Navbar /> */}
          <Sidebar />
        </div>
        <button
          className="absolute top-4 left-4 z-50 text-white bg-gray-800 p-2 rounded-md lg:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? "✖" : "☰"}
        </button>

        {/* Overlay for Mobile */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}
        <div className="flex-1 p-5 lg:ml-64">
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Layout;
