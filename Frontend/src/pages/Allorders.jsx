import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserLarge } from "react-icons/fa6";
import Loader from "../components/Loader/Loader";
import { Link } from "react-router-dom";

const Allorders = () => {
  const [Allorders, setAllOrders] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://mangastore-htvj.onrender.com/ap1/v1/getAllOrders",
        { headers }
      );
      setAllOrders(response.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      {!Allorders && (
        <div className="h-[100%]  flex items-center justify-center">
          <Loader />
        </div>
      )}
      {Allorders && Allorders.length > 0 && (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            All Users Order History
          </h1>

          <div className="mt-4 bg-zinc-800 w-full  py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>
            <div className="w-[22%]">
              <h1 className="">Books</h1>
            </div>
            <div className="w-[45%]">
              <h1 className="">Description</h1>
            </div>
            <div className="w-[9%]">
              <h1 className="">Price</h1>
            </div>
            <div className="w-[16%]">
              <h1 className="">Status</h1>
            </div>
            <div className="w-none md:w-[5%] hidden md:block">
              <h1 className="mt-1">
                <FaUserLarge />
              </h1>
            </div>
          </div>
          {Allorders.map((items, i) => (
            <div
              key={i}
              className=" bg-zinc-800 w-full  py-2 px-4 flex gap-2 hover:bg-zinc-900 hover:cursor-pointer"
            >
              <div className="w-[3%]">
                <h1 className="text-center">{i + 1}</h1>
              </div>
              <div className="w-[22%]">
                <Link
                  to={`/viewBookDetails/${items.book._id}`}
                  className="hover:text-blue-300"
                >
                  {items.book.title}
                </Link>
              </div>
              <div className="w-[45%]">
                <h1 className="">{items.book.desc.slice(0, 50)} ...</h1>
              </div>
              <div className="w-[9%]">
                <h1 className="">Rs.{items.book.price}</h1>
              </div>
              <div className="w-[16%]">
                <h1 className="font-semiblod text-yellow-500">
                  {items.status === "Order Placed" ? (
                    <div className="text-green-500">{items.status}</div>
                  ) : items.status === "Cancelled" ? (
                    <div className="text-red-500">{items.status}</div>
                  ) : (
                    items.status
                  )}
                </h1>
              </div>
              <div className="w-none md:w-[5%] hidden md:block">
                <h1 className="text-sm text-zinc-500">{items.user.username}</h1>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Allorders;
