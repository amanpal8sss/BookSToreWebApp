import React, { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import axios from "axios";
import Loader from "../Loader/Loader";

const RecentlyAdded = () => {
  const [Books, setBooks] = useState();
  useEffect(() => {
    const apiUrl = "https://mangastore-htvj.onrender.com/ap1/v1/getBooks";
    const fetch = async () => {
      const response = await axios.get(apiUrl);
      setBooks(response.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      <div className="mt-8 px-4">
        <h4 className="text-3xl text-yellow-500">Recently Added Books</h4>
        {!Books && (
          <div className="flex items-center justify-center my-12">
            <Loader />
          </div>
        )}
        <div className="my-8 grid  sm:grid-cols-3 md:grid-cols-4 gap-4">
          {Books &&
            Books.map((items, i) => (
              <div key={i}>
                <BookCard books={items} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecentlyAdded;
