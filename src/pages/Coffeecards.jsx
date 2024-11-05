import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Cards from './Cards';

const Coffeecards = () => {
    const navigate=useNavigate();
    const data=useLoaderData();
    const {category}=useParams();
    const [coffees, setCoffees]=useState([]);


    useEffect (()=>{
       if(category){
        const filterdByCategory=[...data].filter(coffee =>coffee.category===category)
        setCoffees(filterdByCategory)
       }
       else{
        setCoffees(data.slice(0,6))
       }
    },[category,data])
    console.log(category)
    return (
        <>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-12'>
            {
                coffees.map(coffee =>(<Cards key={coffee.id} coffee={coffee} ></Cards> ))
            }
        </div>
        <button className='btn btn-warning' onClick={()=>navigate('/coffees')}>View all</button>
        </>
   
    );
};

export default Coffeecards;