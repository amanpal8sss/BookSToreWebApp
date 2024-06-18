import React, { useState } from "react";
import Sidebar from "../components/profile/Sidebar";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Loader from "../components/Loader/Loader";
import axios from "axios";

const Profile = () => {
  //const isLoggedIn = useSelector();
  const [Profile, setProfile] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:5500/api/v1/user", {
        headers,
      });
      setProfile(response.data);
    };
    fetch();
  }, []);
  return (
    <div className="bg-zinc-900  flex px-2 md:px-12 py-8 flex-col md:flex-row gap-4 text-white className">
      {!Profile && (
        <div className="w-full h-[100%] flex items-center justify-center">
          <Loader />
        </div>
      )}
      {Profile && (
        <>
          <div className="w-full md:w-1/6 h-screen">
            <Sidebar data={Profile} />
          </div>
          <div className="w-full h-screen md:w-5/6">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
