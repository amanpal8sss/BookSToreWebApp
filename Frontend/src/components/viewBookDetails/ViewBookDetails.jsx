import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { GoHeartFill } from "react-icons/go";
import { BsCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const ViewBookDetails = () => {
  const { id } = useParams();
  const [Books, setBooks] = useState();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  // console.log(isLoggedIn, role);
  useEffect(() => {
    const apiUrl = `http://localhost:5500/ap1/v1/getBook/${id}`;
    const fetch = async () => {
      const response = await axios.get(apiUrl);
      setBooks(response.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      {Books && (
        <div className="px-4 md:px-12 py-8 h-screen bg-zinc-900  flex flex-col md:flex-row  gap-8">
          <div className=" w-full lg:w-4/6  ">
            <div className="flex items-center flex-col lg:flex-row p-12 justify-around rounded bg-zinc-800 ">
              <img
                src={Books.url}
                alt="/"
                className=" h-[20vh] lg:h-[50vh] rounded w-4/6"
              />
              {isLoggedIn === true && role === "user" && (
                <div className="flex md:flex-col gap-4">
                  <button className="  bg-white rounded-full text-3xl p-3 mt-8 text-red-500">
                    <GoHeartFill />
                  </button>
                  <button className="  bg-white rounded-full text-3xl p-3 mt-8 text-blue-500">
                    <BsCartFill />
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="m-12 p-4 w-full lgw-3/6">
            <h1 className="text-4xl text-zinc-300 font-semibold">
              {Books.title}
            </h1>
            <p className="text-zinc-400 mt-1">By {Books.author}</p>
            <p className="text-zinc-500 mt-4 text-xl">{Books.desc}</p>
            <p className="flex mt-4 items-center justify-start text-zinc-400">
              <GrLanguage className="me-3" /> {Books.language}
            </p>
            <p className="text-3xl  mt-4 text-zinc-100 font-semibold">
              Price : ₹ {Books.price}
            </p>
          </div>
        </div>
      )}
      {!Books && (
        <div className="h-screen bg zinc-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
