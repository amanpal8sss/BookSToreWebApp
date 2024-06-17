import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCard = ({ books, favourite }) => {
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `${localStorage.getItem("token")}`,
    bookid: books._id,
  };
  const handleRemoveFavourite = async () => {
    const response = await axios.put(
      "http://localhost:5500/ap1/v1/removeBookFavourite",
      {},
      {
        headers,
      }
    );
    alert(response.data.message);
  };
  return (
    <div className="bg-black rounded p-5 flex flex-col">
      <Link to={`/viewBookDetails/${books._id}`}>
        <div className="">
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
      {favourite && (
        <button
          className="bg-yellow-200 text-black font-semibold border border-black rounded mt-4 p-1"
          onClick={handleRemoveFavourite}
        >
          Remove from favourites
        </button>
      )}
    </div>
  );
};

export default BookCard;
