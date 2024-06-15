import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    address: "",
  });

  const navigate = useNavigate();
  const Change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async () => {
    try {
      if (
        Values.username === "" ||
        Values.email === "" ||
        Values.password === "" ||
        Values.address === ""
      ) {
        {
          alert("All Fields Are Required");
        }
      } else {
        const response = axios.post(
          "http://localhost:5500/api/v1/signup",
          Values
        );
        console.log(response.data);
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="h-screen bg-zinc-900 flex items-center justify-center">
        <div className="h-[90vh] bg-zinc-800  rounded w-[55vh] flex flex-col">
          <div className="p-5 flex flex-col">
            <h2 className="text-2xl text-zinc-100 font-semibold">Sign up</h2>
            <label className="mt-4 text-zinc-400">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="mt-4 p-2 bg-black text-white rounded "
              name="username"
              required
              value={Values.username}
              onChange={Change}
            />
            <label className="mt-4 text-zinc-400">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              className="mt-4 p-2 bg-black text-white rounded"
              name="email"
              required
              value={Values.email}
              onChange={Change}
            />
            <label className="mt-4 text-zinc-400">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              className="mt-4 p-2 bg-black text-white rounded"
              name="password"
              required
              value={Values.password}
              onChange={Change}
            />
            <label className="mt-4 text-zinc-400">Address</label>
            <textarea
              placeholder="Enter your Address"
              className="mt-4 p-2 bg-black text-white rounded"
              name="address"
              required
              value={Values.address}
              onChange={Change}
            />
            <button
              className=" p-[2px] mt-4 bg-blue-600 border border-blue-500 rounded font-semibold text-white hover:bg-white hover:text-blue-900"
              onClick={submit}
            >
              SignUp
            </button>
            <p className="text-xl text-white font-semibold mt-4 flex items-center justify-center">
              Or
            </p>
            <p className=" text-zinc-400 font-semibold mt-4 flex items-center justify-center">
              Already have an Account?
              <Link to="/Login" className="hover:text-blue-500">
                <u>Login</u>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
