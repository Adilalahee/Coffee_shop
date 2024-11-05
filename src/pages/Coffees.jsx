import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cards from './Cards';

const Coffees = () => {
    const data=useLoaderData();
    const [coffees, setCoffees]=useState([]);

    const handleSort=sortby=>{
        if(sortby=='popularity'){
            const sorted=[...data].sort((a,b)=>b.popularity-a.popularity);
            setCoffees(sorted);

        }else if(sortby=='rating'){
            const sorted=[...data].sort((a,b)=>b.rating-a.rating);
            setCoffees(sorted);
        }

    }
    return (
      <>
      <div className='flex justify-between items-center my-12' >
        <div>
            <h1 className='text-3xl font-thin'>
                Sort coffee&apos;s by popularity & rating-&gt;
            </h1>
        </div>
        <div>
            <button onClick={()=>handleSort('popularity')} className='btn btn-warning'>Popularity</button>
            <button onClick={()=>handleSort('rating')} className='btn btn-warning'>Rating</button>
        </div>

      </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-12'>
        {
            coffees.map(coffee =>(<Cards key={coffee.id} coffee={coffee} ></Cards> ))
        }
    </div>
      </>
    );
};

export default Coffees;