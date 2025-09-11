import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
  const {id} = useParams();
  const[store, setStore] = useState('')
   const fetchData = async ()=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setStore(response.data)
   }
 useEffect(()=>{
  fetchData()
 },[])

  return (
    <div>
      <h1>product {id}</h1>
      <h1>product: {store.username}</h1>
      <h1>address: {store?.address?.city}</h1>
    </div>
  )
}

export default Product;
