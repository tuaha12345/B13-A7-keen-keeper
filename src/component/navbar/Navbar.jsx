import React from "react";
import { RiHome2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";


const Navbar = () => {
    const buttonList=(
        <>
             <div className="navbar-end flex gap-2">
                <a className="btn border-none"><RiHome2Line />Home</a>
                <a className="btn btn-green"><IoMdTime className="btn-green" />Timeline</a>
                <a className="btn border-none"><ImStatsDots />Stats</a>
            </div>

        </>
    );
         
    
  return (
    <div className="navbar bg-[#F9FAFC] shadow-sm px-15">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      {buttonList}
    </div>
  );
};

export default Navbar;
