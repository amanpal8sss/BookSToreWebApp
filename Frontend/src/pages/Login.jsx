import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth.js";
import { useDispatch } from "react-redux";
import axios from "axios";

const Login = () => {
  const [Values, setValues] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const Change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  const submit = async () => {
    try {
      if (Values.username === "" || Values.password === "") {
        {
          alert("All Fields Are Required");
        }
      } else {
        const response = await axios.post(
          "http://localhost:5500/api/v1/signin",
          Values
        );
        dispatch(authActions.login());
        dispatch(authActions.changeRole(response.data.role));

        localStorage.setItem("id", response.data.id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("role", response.data.role);
        navigate("/profile");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <div className="h-screen bg-zinc-900 flex items-center justify-center">
        <div className="h-auto bg-zinc-800  rounded w-[55vh] flex flex-col">
          <div className="p-5 flex flex-col">
            <h2 className="text-2xl text-zinc-100 font-semibold">LogIn</h2>
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

            <button
              className=" p-[2px] mt-4 bg-blue-600 border border-blue-500 rounded font-semibold text-white hover:bg-white hover:text-blue-900"
              onClick={submit}
            >
              Login
            </button>
            <p className="text-xl text-white font-semibold mt-4 flex items-center justify-center">
              Or
            </p>
            <p className=" text-zinc-400 font-semibold mt-4 flex items-center justify-center">
              Don't have an Account?
              <Link to="/signup" className="hover:text-blue-500">
                <u>SignUp</u>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
