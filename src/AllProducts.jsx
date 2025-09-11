import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';


const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    const fetchData = async ()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setProducts(response.data);
    }
    useEffect(()=>{
   fetchData();
    },[])


  return (
    <div className='grid grid-cols-5 m-10 gap-4 '>
       {products.map((product)=>(
        <div key={product.id} className='h-48 w-48 p-2 min-w-fit border border-amber-500 rounded-md  '>
            <p className='text-center'>{product.name}</p>
            <p className='text-center'>{product.email}</p>
            <div className='flex items-center'>
              <button onClick={()=>navigate(`/product/${product.id}`)} className='bg-amber-300 p-2 rounded-2xl cursor-pointer ' >See Details</button>
            </div>
            <div >
                <Header name='ajharul islam'/>
            </div>
        </div>
       
       
        
       ))}
    </div>
  )
}

export default AllProducts
