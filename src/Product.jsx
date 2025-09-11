import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const { id } = useParams();
  const [store, setStore] = useState("");
  const navigate = useNavigate();
  const fetchData = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    setStore(response.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center m-10 bg-amber-200 min-h-screen">
      <div className=" w-fit h-fit m-4 p-10  border border-amber-500 rounded-2xl ">
        <h1>product {id}</h1>
        <h1>product: {store.username}</h1>
        <h1>address: {store?.address?.city}</h1>
        <h1>Zipcode: {store?.address?.zipcode}</h1>
        <button
          onClick={() => navigate("/")}
          className="border border-amber-200 bg-amber-950 rounded-md text-white p-2 text-xl cursor-pointer"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default Product;
