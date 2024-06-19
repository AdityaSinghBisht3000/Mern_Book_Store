import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  Select,
  TextInput,
  Textarea,
} from "flowbite-react";

const Upload = () => {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];
  const [selectedBookCategory, setselectedBookCategory] = useState(
    bookCategories[0]
  );

  const handleChange = (e) => {
    setselectedBookCategory(e.target.value);
  };

  // const handleBookSubmit = (e) => {
  //   const form = e.target;
  //   const bookTitle = form.bookTitle.value;
  //   console.log(bookTitle);
  //   const authorName = form.authName.value;
  //   const imageURL = form.imageURL.value;
  //   const category = form.categoryName.value;
  //   const bookDescription = form.bookDescription.value;
  //   const bookPDFURL = form.bookPDFURL.value;
  //   const bookObj = {
  //     bookTitle,
  //     authorName,
  //     imageURL,
  //     category,
  //     bookDescription,
  //     bookPDFURL,
  //   };
  //   console.log(bookObj);

  //   fetch("http://localhost:5000/upload-book", {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(bookObj),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       alert("Book Uploaded Sucessfully");
  //       form.reset();
  //     });
  // };

  // const UploadBookForm = () => {
  const handleBookSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      category,
      bookDescription,
      bookPDFURL,
    };

    console.log(bookObj);

    fetch("http://localhost:5000/upload-book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookObj),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        alert("Book Uploaded Successfully");
        form.reset();
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        alert("Failed to upload the book");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload A book</h2>
      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              name="bookTitle"
              placeholder="Book Name"
              required
            />
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="authName" value="Author Name" />
            </div>
            <TextInput
              id="authName"
              type="text"
              name="authName"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label htmlFor="imageURL" value="ImageURL" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              name="imageURL"
              placeholder="imageURL"
              required
            />
          </div>

          <div className="lg:w-1/2">
            <div className="block mb-2">
              <Label html For="inputState" value="Book Category" />{" "}
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChange}
            >
              {bookCategories.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </Select>
          </div>
        </div>

        <div>
          <div className="block mb-2">
            <Label html For="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            name="bookDescription"
            placeholder="Write your book discription "
            required
            className="w-full"
            rows={6}
          />
        </div>
        <div>
          <div className="block mb-2">
            <Label html For="book PDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name="bookPDFURL"
            placeholder="book pdf url"
            required
            type="text"
          />
        </div>
        <Button
          type="submit"
          className="mt-5 font-bold bg-blue-700 place-content-center "
        >
          Upload Book
        </Button>
      </form>
    </div>
  );
};

export default Upload;
