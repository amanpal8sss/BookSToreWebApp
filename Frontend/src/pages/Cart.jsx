import React, { useEffect, useState } from "react";
import BookCard from "../components/BookCard/BookCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [Cartbooks, setCartbooks] = useState();
  const [Total, setTotal] = useState(0);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://mangastore-htvj.onrender.com/ap1/v1/getCartBooks",
        {
          headers,
        }
      );
      setCartbooks(response.data.data);
    };
    fetch();
  }, [Cartbooks]);
  useEffect(() => {
    if (Cartbooks && Cartbooks.length > 0) {
      let total = 0;
      Cartbooks.map((item) => {
        total += item.price;
      });
      setTotal(total);
      total = 0;
    }
  }, [Cartbooks]);

  const Placeorder = async () => {
    try {
      const response = await axios.post(
        "https://mangastore-htvj.onrender.com/ap1/v1/placeOrder",
        {
          order: Cartbooks,
        },
        {
          headers,
        }
      );

      alert(response.data.message);
      navigate("/profile/orderhistory");
    } catch (error) {
      console.log({ message: error.message });
    }
  };
  return (
    <div className=" bg-zinc-900 h-auto lg:h-[180vh] w-full">
      <h1 className=" p-7 text-yellow-500 text-3xl">Books Added To Cart</h1>
      <div>
        {Cartbooks && Cartbooks.length === 0 && (
          <div className="text-5xl font-semibold text-zinc-200  flex items-center justify-center flex-col w-full p-2 rounded">
            No Books Added To Cart
          </div>
        )}
      </div>
      <div className=" lg:grid lg:grid-cols-4 gap-12 p-5 ">
        {Cartbooks &&
          Cartbooks.map((item, i) => (
            <div className="p-2 lg:p-0" key={i}>
              <BookCard books={item} cart={true} />
            </div>
          ))}
      </div>
      {Cartbooks && Cartbooks.length > 0 && (
        <div className="mt-4 w-full  flex flex-col items-end justify-end p-5">
          <div className=" w-full  flex items-center justify-end p-5">
            <div className="p-4 bg-black rounded">
              <h1 className="text-white font-semibold flex justify-center">
                Total Amount
              </h1>
              <div className="text-white text-xl flex items-center justify-between gap-2  mt-3">
                <h2>{Cartbooks.length} Books </h2>
                <h2> ₹{Total}</h2>
              </div>
              <div className="mt-4 w-[100%] ">
                <button
                  className="text-2xl p-2 text-black bg-white rounded  hover:text-white font-semibold hover:bg-blue-700"
                  onClick={Placeorder}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
