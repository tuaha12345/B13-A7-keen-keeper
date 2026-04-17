import React from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import { Suspense } from 'react';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Suspense fallback={<div>Loading...</div>}>
            <Outlet></Outlet>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default Root;