import React, { useEffect, useState } from "react";
import BookCards from "../components/BookCards";

const Otherbooks = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setbooks(data.slice(0, 6)));
  }, []);
  return (
    <div>
      <BookCards books={books} headline="Other Books" />
    </div>
  );
};

export default Otherbooks;
