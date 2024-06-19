import React from "react";
import { useActionData, useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle, imageURL } = useLoaderData();
  return (
    <div className="px-4 mt-28 lg:px-24">
      <img src={imageURL} className="h-96" />
      <h2>{bookTitle}</h2>
      {console.log(bookTitle)}
    </div>
  );
};

export default SingleBook;
