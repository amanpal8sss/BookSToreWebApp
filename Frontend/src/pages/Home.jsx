import React from "react";
import Hero from "../components/home/Hero";
import RecentlyAdded from "../components/home/RecentlyAdded";
import BookCard from "../components/BookCard/BookCard";
const Home = () => {
  return (
    <>
      <div className=" bg-zinc-800 text-white px-10 py-8">
        <Hero />
        <RecentlyAdded />
      </div>
    </>
  );
};
export default Home;
