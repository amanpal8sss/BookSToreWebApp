import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../components/Loader/Loader";
import BookCard from "../components/BookCard/BookCard";
const AllBooks = () => {
  const [Books, setBooks] = useState();
  useEffect(() => {
    const apiUrl = "https://mangastore-htvj.onrender.com/ap1/v1/getAllBooks";
    const fetch = async () => {
      const response = await axios.get(apiUrl);
      setBooks(response.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      <div className="bg-zinc-900 h-[120vh] px-12 py-8">
        <h4 className="text-3xl text-yellow-500">All Books</h4>
        {!Books && (
          <div className="flex h-screen items-center justify-center my-12">
            <Loader />
          </div>
        )}
        <div className="my-8 grid  sm:grid-cols-3 md:grid-cols-4 gap-8">
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

export default AllBooks;
