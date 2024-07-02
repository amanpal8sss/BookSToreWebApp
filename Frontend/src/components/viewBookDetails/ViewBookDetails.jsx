import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { GoHeartFill } from "react-icons/go";
import { BsCartFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useSelector } from "react-redux";

const ViewBookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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
  }, [Books]);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `${localStorage.getItem("token")}`,
    Bookid: id,
  };
  const Bookid = localStorage.getItem("id");
  const handleFavourite = async () => {
    const response = await axios.put(
      "http://localhost:5500/ap1/v1/addBookFavourite",
      {},
      { headers }
    );
    alert(response.data.message);
  };

  const handleCart = async () => {
    const response = await axios.put(
      "http://localhost:5500/ap1/v1/addToCart",
      {},
      { headers }
    );
    alert(response.data.message);
    navigate("/all-books");
  };

  const deleteBook = async () => {
    const response = await axios.delete(
      `http://localhost:5500/ap1/v1/deleteBook/${Bookid}`,
      { headers }
    );
    alert(response.data.message);
    navigate("/all-books");
  };
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
                <div className="flex flex-col md:flex-row  lg:flex-col justify-between items-center gap-2 lg:justify-start mt-8 lg:mt-0">
                  <button
                    className="  bg-white  rounded lg:rounded-full text-xl lg:text-3xl  lg:p-3 mt-8 text-red-500 flex items-center"
                    onClick={handleFavourite}
                  >
                    <GoHeartFill />{" "}
                    <span className="ms-4 block lg:hidden">Favourites</span>
                  </button>
                  <button
                    className="  bg-blue-500 rounded  lg:rounded-full text-xl lg:text-3xl lg:p-3 mt-8 text-white flex items-center justify-center"
                    onClick={handleCart}
                  >
                    <BsCartFill />{" "}
                    <span className="ms-4 block lg:hidden">Add To Cart</span>
                  </button>
                </div>
              )}
              {isLoggedIn === true && role === "admin" && (
                <div className="flex flex-col md:flex-row  lg:flex-col justify-between items-center gap-2 lg:justify-start mt-8 lg:mt-0">
                  <Link
                    to={`/updateBook/${id}`}
                    className="  bg-white  rounded lg:rounded-full text-xl lg:text-3xl  lg:p-3 mt-8 text-red-500 flex items-center  "
                  >
                    <FaEdit />{" "}
                    <span className="ms-4 block lg:hidden">Edit</span>
                  </Link>
                  <button
                    className="  bg-blue-500 rounded lg:rounded-full text-xl lg:text-3xl lg:p-3 mt-8 text-white flex items-center justify-center"
                    onClick={deleteBook}
                  >
                    <MdOutlineDelete />{" "}
                    <span className="ms-4 block lg:hidden">Delete Book</span>
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
        <div className="h-screen bg-zinc-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ViewBookDetails;
