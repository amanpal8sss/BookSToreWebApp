import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ books }) => {
  return (
    <>
      <Link to={`/viewBookDetails/${books._id}`}>
        <div className="bg-black rounded p-5 flex flex-col">
          <div className=" bg-zinc-900 p-2 rounded flex items-center justify-center">
            <img src={books.url} alt="/" className="h-[25vh]" />
          </div>
          <h2 className="mt-4 text-white text-xl font-semibold">
            Title: {books.title}
          </h2>
          <p className="mt-2 text-white text-xl font-semibold">
            By {books.author}
          </p>
          <p className="mt-2 text-white text-xl font-semibold">
            Price: ₹ {books.price}
          </p>
        </div>
      </Link>
    </>
  );
};

export default BookCard;
