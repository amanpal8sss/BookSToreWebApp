import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const UpdateBook = () => {
  const [Data, setData] = useState({
    url: "",
    title: "",
    author: "",
    price: "",
    desc: "",
    language: "",
  });
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `${localStorage.getItem("token")}`,
  };
  const { id } = useParams();
  const navigate = useNavigate();
  const change = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const submit = async () => {
    try {
      if (
        Data.url === "" ||
        Data.title === "" ||
        Data.author === "" ||
        Data.price === "" ||
        Data.desc === "" ||
        Data.language === ""
      ) {
        alert("All fields are required!");
      } else {
        const response = await axios.put(
          `https://mangastore-htvj.onrender.com/ap1/v1/updateBook/${id}`,
          Data,
          {
            headers,
          }
        );
        setData({
          url: "",
          title: "",
          author: "",
          price: "",
          desc: "",
          language: "",
        });
        alert(response.data.message);
        navigate(`/viewBookDetails/${id}`);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    const apiUrl = `https://mangastore-htvj.onrender.com/ap1/v1/getBook/${id}`;
    const fetch = async () => {
      const response = await axios.get(apiUrl);
      setData(response.data.data);
    };
    fetch();
  }, []);
  return (
    <>
      <div className="h-[100%] bg-zinc-900 p-0 md:p-4">
        <h1 className="text-3xl md:text-5xl text-zinc-500 mb-5">Update Book</h1>
        <div className="p-3 bg-zinc-800 rounded">
          <div>
            <label htmlFor="" className="text-zinc-400">
              Image
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              name="url"
              placeholder="url of image"
              required
              value={Data.url}
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="" className="text-zinc-400">
              Title of Book
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              name="title"
              placeholder=" Title of Book"
              required
              value={Data.title}
              onChange={change}
            />
          </div>
          <div>
            <label htmlFor="" className="text-zinc-400">
              Author Of Book
            </label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              name="author"
              placeholder=" Author Of Book"
              required
              value={Data.author}
              onChange={change}
            />
          </div>
          <div className="mt-4 flex gap-4">
            <div className="w-3/6">
              <label htmlFor="" className="text-zinc-400">
                Language
              </label>
              <input
                type="text"
                className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                name="language"
                placeholder=" language Of Book"
                required
                value={Data.language}
                onChange={change}
              />
            </div>
            <div className="w-3/6">
              <label htmlFor="" className="text-zinc-400">
                Price
              </label>
              <input
                type="text"
                className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
                name="price"
                placeholder=" Price Of Book"
                required
                value={Data.price}
                onChange={change}
              />
            </div>
          </div>
          <div>
            <label htmlFor="" className="text-zinc-400">
              Description Of Book
            </label>
            <textarea
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              rows="5"
              name="desc"
              placeholder=" Description Of Book"
              required
              value={Data.desc}
              onChange={change}
            />
          </div>
          <button
            className="mt-4 px-3 bg-blue-500 text-white font-semibold py-2 hover:bg-blue-600 transition-all duration-100 rounded"
            onClick={submit}
          >
            UpdateBook
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;
