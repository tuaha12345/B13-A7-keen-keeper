import React from 'react';
import Navbar from '../navbar/Navbar';
import Home from '../home/Home';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;