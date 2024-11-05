import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import nutritionimage from '../assets/nutrition.png'
import { addFavourite, getAllfavorites } from '../components/Utility/Utility';

const Coffeedetails = () => {
    const {id}=useParams();
    const data=useLoaderData();
    const [coffees,setCoffees]=useState([]);
    const [isFavorite,SetisFavorite]=useState(false); 
    
    useEffect(()=>{
        const singledata=data.find(coffee=>coffee.id==id);
        setCoffees(singledata);
        const favorites=getAllfavorites();
        const isExist=favorites.find(item=>item.id===singledata.id);
        if(isExist) {
            SetisFavorite(true)
        }

    },[data,id])

    const {name,image,ingredients,nutrition_info,description,making_process,rating,popularity}=coffees;

    const handleFavourite= coffees =>{
        addFavourite(coffees)
        SetisFavorite(true)
    }
    return (
        <div className='my-12'>
            <h1 className='text-2xl md:text-4xl font-thin mb-4'>{description}</h1>
            <div className='w-full h-full md:h-[500px] object-cover overflow-hidden shadow-xl rounded-xl'>
                <img className='w-full h-full' src={image} alt="" />
            </div>
            <div className='flex justify-between my-6'>
                <div>
                    <h1 className='text-2xl md:text-3xl font-thin '>{name}</h1>
                    <p className='text-base'>Popularity:{popularity}</p>
                    <p className='text-base'>Rating:{rating}</p>
                </div>
                <div>
                    <button disabled={isFavorite} onClick={()=>handleFavourite(coffees)} className='btn btn-warning'>Add Favourite</button>

                </div>
                </div>
                <div className='my-6'>
                    <h2 className='text-2xl font-thin'>Making Process</h2>
                    <p className='text-base'>{making_process}</p>
                </div>
                <div className='my-6 flex justify-between items-center'>
                    <div className='flex-1'>
                        <div className='flex flex-col justify-center gap-6'>
                            <h1 className='text-2xl font-thin'>Ingredients:</h1>
                            <ul className='text-xl ml-12'>
                                {
                                    ingredients &&
                                    ingredients.map(i=>(<li className='list-disc' key={i}>{i}</li>))
                                }

                            </ul>
                            <h1 className='text-3xl font-thin'>Nutrition Info</h1>
                            <ul className='text-xl ml-12'>
                                {
                                    nutrition_info && 
                                    Object.keys(nutrition_info).map(n=>(<li className='list-disc' key={nutrition_info[n]}>{n}</li>))
                                }
                            </ul>

                        </div>

                    </div>
                    <div className='flex-1'>
                        <img src={nutritionimage} alt="" />

                    </div>

                </div>

            </div>
           
    
    );
};

export default Coffeedetails;