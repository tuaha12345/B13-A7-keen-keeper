import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="footer bg-[#344D3F] text-white py-5">
         <div className="w-full my-5">
            <div className="flex flex-col justify-center items-center gap-7  w-11/12 mx-auto my-7">
                <h1 className='font-bold text-3xl md:text-[50px] text-center'>KeenKeeper</h1>
                <p className='text-center'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div className='flex flex-col gap-3'>
                    <h3 className='font-semibold text-[24px] text-center'>Social Links</h3>
                    <div className='flex gap-5'>
                        <div className='w-10 h-10 bg-white flex justify-center items-center rounded-full'><AiFillInstagram className='text-[#0f0f0f] w-6 h-6' /></div>
                        <div className='w-10 h-10 bg-white flex justify-center items-center rounded-full'><FaSquareFacebook className='text-[#0f0f0f] w-6 h-6' /></div>
                        <div className='w-10 h-10 bg-white flex justify-center items-center rounded-full'><FaXTwitter className='text-[#0f0f0f] w-6 h-6' /></div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center mx-auto w-10/12 border-t border-[#6b8a75] pt-5 ">
              <p>© 2026 KeenKeeper. All rights reserved.</p>
              <ul className='flex gap-7 mt-5 md:mt-0'>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookies</li>
              </ul>
            </div>
         </div>
            
        </footer>
    );
};

export default Footer;