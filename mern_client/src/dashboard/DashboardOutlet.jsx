import { Sidebar } from "flowbite-react";
// import React from "react";
import { Outlet } from "react-router-dom";
import Sidebars from "./Sidebar";
import { Table } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

const DashboardOutlet = () => {
  const [allBooks, setBooks] = useState([]);
  // useEffect(() => {
  //   fetch("https://localhost:5000/all-books")
  //     .then((res) => res.json())
  //     .then((data) => setAllBooks(data));
  // }, []);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/all-books"); // Use HTTP for local development
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Failed to fetch books:", error);
      }
    };

    fetchBooks();
  }, []);

  // console.log("this is dashboard" + allBooks);

  return (
    <div>
      {/* <Navbar className="flex-row w-full" /> */}
      <div className="flex flex-col gap-4 md:flex-row">
        <Sidebars />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardOutlet;
