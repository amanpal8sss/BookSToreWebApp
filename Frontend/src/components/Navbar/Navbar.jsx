import React from "react";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      link: "/",
    },

    {
      title: "About Us",
      link: "/about-us",
    },

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
  return (
    <>
      <div className=" flex bg-black text-white px-8 py-4 items-center justify-between ">
        <div className=" flex text-2xl font-semibold items-center ">
          <img
            className="h-12 w-12"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJH8jU0gZ8H0JlTHKT1te64EKWDWGU5hzEOg&s"
            alt="logo"
          />
          BookStore
        </div>
        <div className="nav-links-bookstore flex items-center gap-4">
          <div className="flex gap-4">
            {links.map((item, i) => (
              <div
                className="hover:text-red-600 transition-all duration-300"
                key={i}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="flex gap-4">
            <button className="px-4 py 2 border border-blue-500 rounded items-center hover:bg-white hover:text-black transition-all duration-100">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-500 rounded  items-center hover:bg-white hover:text-black transition-all duration-100">
              signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
