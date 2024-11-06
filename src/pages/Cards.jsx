import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Cards = ({coffee,handleRemove}) => {
    const {pathname}=useLocation();
    const {id,name,image,category,origin,
        type,
        rating,
        popularity}=coffee;
    
    return (
        <div className='flex relative'>
            <Link
            to={`/coffee/${id}`}
            className='transition hover:scale-100 shadow-xl rounded-xl overflow-hidden'
            >
                <figure className='w-full h-48 overflow-hidden'>
                    <img src={image} alt="" />
                </figure>
                <div className='p-4'>
                    <h1>{name}</h1>
                    <p>{category}</p>
                    <p>{type}</p>
                    <p>{origin}</p>
                    <p>{type}</p>
                    <p>{rating}</p>
                    <p>{popularity}</p>
                </div>
            </Link>
            {
                pathname==='/Dashboard' && (
                    <div onClick={()=>handleRemove(id)} className='absolute btn btn-warning  -top-5 -right-5'>
                        Delete 
                    </div>
                )
            }
        </div>
    );
};

export default Cards;