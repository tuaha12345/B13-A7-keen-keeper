import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const TimeLine = () => {
    const [filterType, setFilterType] = useState("all");
    const { timeline } = useContext(TimelineContext);
    const displayTimeline =filterType==="all"?timeline:timeline.filter((item) => item.timelineType === filterType);


  return (
    <div className="container mx-auto w-11/12 mb-20">
      <h1 className="text-[48px] font-bold">Timeline </h1>
      <div className="dropdown my-7">
        <div tabIndex={0} role="button" className="btn m-1 text-base-500 flex justify-between  w-65 ">
          <p>Filter timeline</p> <FaChevronDown />
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm "
        >
          <li>
            <a onClick={() => setFilterType("Call")}>Call</a>
          </li>
          <li>
            <a onClick={() => setFilterType("Text")}>Text</a>
          </li>
           <li>
            <a onClick={() => setFilterType("Video")}>Video</a>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-7">
      


      { displayTimeline.length===0?<div className="flex gap-3 bg-white p-8 py-50 rounded-xl shadow items-center justify-center"><h1 className="text-[48px] font-bold text-center">No timeline found</h1></div>:
      
        displayTimeline.map((timeline,index)=><div className="flex gap-3 bg-white p-8 rounded-xl shadow items-center " key={index}>
           <div className="text-4xl">{timeline.timelineType==='Call'?<BsFillTelephoneFill />:timeline.timelineType==='Text'?<IoChatbubbleEllipsesOutline />:timeline.timelineType==='Video'?'📹':'🤝'}</div>
           <div className="flex flex-col text-[#64748B]">
              <h3 className="text-[18px] font-normal"><span className="text-[20px] font-semibold text-black">{timeline.timelineType} </span> with {timeline.friendName}</h3>
              <p className="text-[18px] font-medium">{timeline.time}</p>
           </div>
        </div>)
        
        
        }


        {/* <div className="flex gap-3 bg-white p-8 rounded-xl shadow items-center ">
           <div className="text-4xl">🤝</div>
           <div className="flex flex-col text-[#64748B]">
              <h3 className="text-[18px] font-normal"><span className="text-[20px] font-semibold text-black">Meetup </span> with Tom Baker</h3>
              <p className="text-[18px] font-medium">March 29, 2026</p>
           </div>
        </div> */}



      </div>
    </div>
  );
};

export default TimeLine;
