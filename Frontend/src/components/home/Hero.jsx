import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row h-[80vh]  justify-center items-center ">
        <div className="w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
          <h1 className=" text-4xl lg:text-6xl font-semibold text-center lg:text-left">
            Discover Books Which Will Help You To Change Your Being!
          </h1>
          <p className="mt-8 text-xl text-center lg:text-left ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            obcaecati, sit tempore temporibus illo cum.
          </p>
          <Link to="/all-books">
            <button className="text-xl lg:text-2xl  text-yellow-100 border justify-center border-yellow-100 px-10 py-2 my-2 rounded-full hover:bg-orange-600 hover:text-black transition-all duration-100">
              Discover Books
            </button>
          </Link>
        </div>
        <div className="w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center  ">
          <div>
            <div>
              <img
                src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=5.2"
                alt="hero"
              />
            </div>
            <div className="mt-4">
              <img
                src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=5.2"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
