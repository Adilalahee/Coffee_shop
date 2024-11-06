import React, { useEffect, useState } from 'react';
import Heading from './Heading';
import { getAllfavorites, removeFavourite } from '../components/Utility/Utility';
import Cards from './Cards';

const Dashboard = () => {
    const [coffees,setCoffees]=useState([]);

    useEffect(()=>{
        const favorites=getAllfavorites();
        setCoffees(favorites);
    },[])

    const handleRemove=(id)=>{
        removeFavourite(id);
        const favorites=getAllfavorites();
        setCoffees(favorites);
    }
    return (
        <>
        <Heading title='Welcome to Dashboard' subtitle='Your favorites will be here'></Heading>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 my-12'>
            {
                coffees.map(coffee =>(<Cards handleRemove={handleRemove} key={coffee.id} coffee={coffee} ></Cards> ))
            }
        </div>
        </>
            
       
    );
};

export default Dashboard;