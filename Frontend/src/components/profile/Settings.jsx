import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";

const Settings = () => {
  const [ProfileData, setProfileData] = useState();
  const [Value, setValue] = useState({ address: " " });
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `${localStorage.getItem("token")}`,
  };

  const change = (e) => {
    const { name, value } = e.target;
    setValue({ ...Value, [name]: value });
  };
  const submitAddress = async () => {
    const response = await axios.put(
      "http://localhost:5500/api/v1/update",
      { Value },
      {
        headers,
      }
    );
    alert(response.data.message);
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get("http://localhost:5500/api/v1/user", {
        headers,
      });
      setProfileData(response.data);
      setValue({ address: response.data.address });
    };
    fetch();
  }, []);
  return (
    <>
      {!ProfileData && (
        <div className="flex w-full items-center justify-center h-[100%]">
          <Loader />{" "}
        </div>
      )}
      {ProfileData && (
        <div className="h-[100%] p-0 md:p-4 text-zinc-100">
          <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
            Settings
          </h1>
          <div className="flex gap-12">
            <div className="">
              <label htmlFor="">Username</label>
              <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                {ProfileData.username}
              </p>
            </div>
            <div className="">
              <label htmlFor="">Email</label>
              <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                {ProfileData.email}
              </p>
            </div>
          </div>
          <div className="mt-4 flex flex-col">
            <label htmlFor="">Address</label>
            <textarea
              className="p-2 rounded bg-zinc-800 mt-2 font-semibold"
              rows="5"
              placeholder="address"
              name="address"
              value={Value.address}
              onChange={change}
            ></textarea>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={submitAddress}
              className="bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-200 transition-all duration-100"
            >
              Update
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Settings;
