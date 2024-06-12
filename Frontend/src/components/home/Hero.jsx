import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex h-[75vh] justify-between ">
        <div className="w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center">
          <h1 className=" text-4xl lg:text-6xl font-semibold text-center lg:text-left">
            Discover Books Which Will Help You To Change Your Being!
          </h1>
          <p className="mt-8 text-xl text-center lg:text-left ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia
            obcaecati, sit tempore temporibus illo cum.
          </p>
          <div>
            <button className="text-xl lg:text-2xl text-yellow-100 border border-yellow-100 px-10 py-2 mt-10 rounded-full hover:bg-orange-600 hover:text-black transition-all duration-100">
              Discover Books
            </button>
          </div>
        </div>
        <div className="w-full lg:w-3/6">
          <img
            src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=5.2"
            alt="hero"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
