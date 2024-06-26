import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Mobilenav = () => {
  const role = useSelector((state) => state.auth.role);
  return (
    <>
      {role === "user" && (
        <div className="w-full flex lg:hidden items-center justify-between my-8">
          <Link
            to="/profile"
            className="p-2 hover:bg-zinc-900 w-full text-center cursor-pointer rounded"
          >
            Favorites
          </Link>
          <Link
            to="/profile/orderhistory"
            className="p-2 hover:bg-zinc-900 w-full text-center cursor-pointer rounded"
          >
            Order History
          </Link>
          <Link
            to="/profile/settings"
            className="p-2 hover:bg-zinc-900 w-full text-center cursor-pointer rounded"
          >
            Settings
          </Link>
        </div>
      )}
      {role === "admin" && (
        <div className="w-full flex lg:hidden items-center justify-between my-8">
          <Link
            to="/profile"
            className="p-2 hover:bg-zinc-900 w-full text-center cursor-pointer rounded"
          >
            All Order
          </Link>
          <Link
            to="/profile/Addbook"
            className="p-2 hover:bg-zinc-900 w-full text-center cursor-pointer rounded"
          >
            Add Book
          </Link>
        </div>
      )}
    </>
  );
};

export default Mobilenav;
