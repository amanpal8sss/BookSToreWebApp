import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import axios from "axios";

const Favourites = () => {
  const [FavouriteBooks, setFavouriteBooks] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:5500/ap1/v1/getBookFavourite",
        {
          headers,
        }
      );
      setFavouriteBooks(response.data.data);
    };
    fetch();
  }, [FavouriteBooks]);
  return (
    <div className="grid grid-cols-4 gap-2">
      {FavouriteBooks &&
        FavouriteBooks.map((items, i) => (
          <div key={i}>
            <BookCard books={items} favourite={true} />
          </div>
        ))}
    </div>
  );
};

export default Favourites;
//{FavouriteBooks &&
//     FavouriteBooks.map((items, i) => (
//       <div key={i}>
//         <BookCard books={items} />
//       </div>
//     ))}
