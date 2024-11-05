import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Mainlayout = () => {
    return (
        <div>
            <Toaster></Toaster>
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