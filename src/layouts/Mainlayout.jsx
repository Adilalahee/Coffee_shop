import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
    return (
        <div>
            {/* Navbar */}
           <div className='h-16'>
           <Navbar></Navbar>
           </div>
            {/* Dynamic route */}
            <div className='min-h-[calc(100vh-232px)] container py-8 mx-auto px-10'>
                <Outlet></Outlet>
            </div>
            {/* Footer  */}
            <Footer></Footer>
        </div>
    );
};

export default Mainlayout;