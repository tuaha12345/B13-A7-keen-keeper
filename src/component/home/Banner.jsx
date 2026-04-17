import React,{use} from "react";
import { FaPlus } from "react-icons/fa6";
import Card from "../card/Card";

const Banner = ({friends}) => {
   const friendData=friends;
  //  console.log(friendData);
  
  
  
  return (
    <div>
      <div className="text-center mx-auto flex flex-col gap-4 my-5">
        <h1 className="text-center font-bold text-[48px]">
          Friends to keep close in your life
        </h1>
        <p className="text-center w-5/12 mx-auto">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <div>
          <button className="btn btn-green">
            <FaPlus /> Add a Friend
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-5 my-5">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h3 className="font-semibold text-[32px] text-center">10</h3>
          <p className="text-gray-400 text-[18px] text-center">Total Friends</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow">
          <h3 className="font-semibold text-[32px] text-center">3</h3>
          <p className="text-gray-400 text-[18px] text-center">On Track</p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow">
          <h3 className="font-semibold text-[32px] text-center">6</h3>
          <p className="text-gray-400 text-[18px] text-center">
            Need Attention
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow">
          <h3 className="font-semibold text-[32px] text-center">10</h3>
          <p className="text-gray-400 text-[18px] text-center">
            Interactions This Month
          </p>
        </div>
      </div>
      <div className="py-5">
        <hr className="border-[#b1ccba]"></hr>
      </div>
      <div className="card section ">
        <h3 className="font-semibold text-2xl">Your Friends</h3>
        {/* cards */}
        <div className="cards grid grid-cols-1 md:grid-cols-4 gap-5 my-5">
         {/* {friendData.map((fData) => (console.log(fData),
          <Card key={fData.id} fData={fData}></Card>
         ))} */}
            
   {Array.isArray(friendData) && friendData.length > 0 ? (
     friendData.map((fData) => (
       console.log(fData),
       <Card key={fData.id} fData={fData}></Card>
     ))
   ) : (
     <span className="loading loading-spinner loading-xl text-[#344D3F]"></span>
   )}


        </div>
      </div>
      
    </div>
  );
};

export default Banner;
