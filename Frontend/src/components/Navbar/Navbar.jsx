import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSegment } from "react-icons/md";
import { useSelector } from "react-redux";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },

    // {
    //   title: "About Us",
    //   link: "/about-us",
    // },

    {
      title: "All Books",
      link: "/all-books",
    },

    {
      title: "Carts",
      link: "/cart",
    },

    {
      title: "Profile",
      link: "/profile",
    },
  ];
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (isLoggedIn === false) {
    links.splice(2, 2);
  }
  const [MobileNav, setMobileNav] = useState("hidden");
  return (
    <>
      <nav className="z-50 relative flex bg-black text-white px-8 py-4 items-center justify-between ">
        <Link to="/" className=" flex text-2xl font-semibold items-center ">
          <img
            className="h-12 w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH8jU0gZ8H0JlTHKT1te64EKWDWGU5hzEOg&s"
            alt="logo"
          />
          BookStore
        </Link>
        <div className="nav-links-bookstore block md:flex items-center gap-4">
          <div className="hidden md:flex gap-4">
            {links.map((item, i) => (
              <Link
                to={item.link}
                className="hover:text-red-600 transition-all duration-300"
                key={i}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex gap-4">
            <Link
              to="/login"
              className="px-4 py 1 border border-blue-500 rounded  hover:bg-white hover:text-black transition-all duration-100"
            >
              Login
            </Link>
            <Link
              to="signup"
              className="px-4 py-1 bg-blue-500 rounded  hover:bg-white hover:text-black transition-all duration-100"
            >
              signup
            </Link>
          </div>
          <button
            className="block md:hidden text-white text-2xl hover:text-zinc-400 "
            onClick={() =>
              MobileNav === "hidden"
                ? setMobileNav("block")
                : setMobileNav("hidden")
            }
          >
            <MdOutlineSegment />
          </button>
        </div>
      </nav>
      <div
        className={`${MobileNav} bg-black h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-center justify-center`}
        onClick={() =>
          MobileNav === "hidden"
            ? setMobileNav("block")
            : setMobileNav("hidden")
        }
      >
        {links.map((item, i) => (
          <Link
            to={item.link}
            className={`${MobileNav} text-white mb-2 hover:text-red-600 transition-all duration-300`}
            key={i}
          >
            {item.title}
          </Link>
        ))}
        <Link
          to="/login"
          className={`${MobileNav} px-4 py 1 mb-2 border font-semibold border-blue-500 rounded  hover:bg-white text-white hover:text-black transition-all duration-100`}
        >
          Login
        </Link>
        <Link
          to="signup"
          className={`${MobileNav} px-4 py-1 mb-2 font-semibold bg-blue-500 rounded  hover:bg-white hover:text-black transition-all duration-100`}
        >
          signup
        </Link>
      </div>
    </>
  );
};

export default Navbar;
