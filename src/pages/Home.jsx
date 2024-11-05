import React from 'react';
import Banner from './Banner';
import Heading from './Heading';
import Categories from './Categories';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categories=useLoaderData();
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading  */}
            <Heading title={'Hello Title'} subtitle={'Hello Subtitle'}></Heading>
            {/* Category wise product */}
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
            {/* Dynamic Nested Components */}
        </div>
    );
};

export default Home;