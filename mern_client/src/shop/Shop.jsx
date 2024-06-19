import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24 ">
      <h2 className="text-5xl font-bold text-center">All books are here </h2>

      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((book) => (
          <Card
            className=" h-26 "
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={book.imageURL}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 mb-2">
              {/* {book.bookDescription} */}
              Description about the book will be available at book page
            </p>
            <button className="bg-blue-700 font-semibold text-white py-2 rounded mb-2">
              Buy Now
            </button>
          </Card>
        ))}
      </div>

      {/* shop */}
    </div>
  );
};

export default Shop;
