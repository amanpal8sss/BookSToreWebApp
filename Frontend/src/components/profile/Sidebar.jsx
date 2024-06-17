import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";

const Sidebar = ({ data }) => {
  const navigate = useNavigate();
  const logout = () => {
    if (
      localStorage.getItem("id") &&
      localStorage.getItem("role") &&
      localStorage.getItem("token")
    ) {
      localStorage.setItem("id", "");
      localStorage.setItem("role", "");
      localStorage.setItem("token", "");
      navigate("/");
    }
  };
  return (
    <div className="bg-zinc-800 p-4 rounded flex flex-col items-center justify-between h-[100%]">
      <div className="flex items-center justify-center flex-col">
        <img src={data.avatar} alt="/" className="h-[8vh]" />
        <p className="mt-3 text-xl text-white font-semibold">{data.username}</p>
        <p className="mt-1 text-normal text-zinc-300  font-semibold">
          {data.email}
        </p>
        <div className="mt-4 w-full h-[1px] bg-white hidden lg:block"></div>
      </div>
      <div className="w-full  flex-col items-center justify-center hidden lg:flex">
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
      <button
        onClick={logout}
        className="bg-zinc-900 w-3/6 lg:w-full mt-4 lg:mt-0 text-white font-semibold flex items-center justify-center py-2 hover:bg-white hover:text-zinc-900 transition-all duration-100 rounded"
      >
        LogOut
        <RiLogoutBoxRLine className="ms-4" />
      </button>
    </div>
  );
};

export default Sidebar;
