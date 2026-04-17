import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { NavLink } from "react-router";


const Navbar = () => {
    const buttonList=(
        <>
             <div className="navbar-end flex gap-2">
                <NavLink to={"/"} className="btn border-none"><RiHome2Line />Home</NavLink>
                <NavLink to={"/timeline"} className="btn btn-green"><IoMdTime className="btn-green" />Timeline</NavLink>
                <NavLink to={"/stats"} className="btn border-none"><ImStatsDots />Stats</NavLink>
            </div>

        </>
    );
         
    
  return (
    <div className="navbar bg-[#F9FAFC] shadow-sm px-15">
      <div className="navbar-start">
        <a className="text-2xl font-bold">Keen<span className="text-[#344D3F]">Keeper</span></a>
      </div>
      {buttonList}
    </div>
  );
};

export default Navbar;
