import React, { useReducer, useState, useEffect, useContext } from "react";
import { FiArchive } from "react-icons/fi";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FaRegTrashAlt } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { LuMessageSquareText } from "react-icons/lu";
import { VscDeviceCameraVideo } from "react-icons/vsc";
import {  useParams,useLoaderData } from "react-router";
import { TimelineContext } from "../../context/TimelineContext";
 import { ToastContainer, toast } from 'react-toastify';


// const friend = {
//   id: 1,
//   name: "Ahsan Rahman",
//   picture: "https://randomuser.me/api/portraits/men/32.jpg",
//   email: "ahsan.rahman@gmail.com",
//   days_since_contact: 18,
//   status: "Overdue",
//   tags: ["university", "close friend"],
//   bio: "We studied Computer Science together at university. Used to work on projects and late-night coding sessions.",
//   goal: 14,
//   next_due_date: "2026-04-01",
// };

const CardDetails = ({params}) => {
const { timeline, setTimeline } = useContext(TimelineContext);

// console.log('timeline =', timeline);


  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  },[]);
  const {friendId}=useParams();
  const Id=parseInt(friendId);
  const friend=friends.find(friend=>friend.id===Id);
  if (!friend) {
  return ;
}

const setTimeLine=(friend,timelinetype)=>{
  const timelineType=timelinetype;
  const friendName=friend;
  const time = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const newTimeline={timelineType,friendName,time};
  setTimeline([...timeline,newTimeline]);
  toast.success(timelineType+' with '+friendName+' added to timeline successfully');
}


  // console.log(friendX);
  // console.log(friends);
  return (
    <div className="py-61 px-20 grid  grid-cols-5 grid-rows-3 gap-5">
      <div
        className="card bg-white p-8 rounded-xl shadow flex flex-col gap-3 col-span-2 row-span-2"
        key={friend.id}
      >
        <img
          src={friend.picture}
          className="border rounded-full w-24 h-24 mx-auto my-5"
        ></img>
        <h3 className="font-semibold text-[20px] text-center">{friend.name}</h3>
        <p className="text-gray-400 text-[13px] text-center">
          {friend.days_since_contact}d ago
        </p>
        <div className="flex flex-wrap justify-center gap-2  mx-auto">
          <div>
            <button
              className={`btn rounded-2xl text-white ${friend.status === "Overdue" ? "bg-[#d32323]" : friend.status == "Almost Due" ? "bg-[#DCB254]" : "bg-[#344d3f]"}`}
            >
              {friend.status}
            </button>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-2  mx-auto">
          {friend.tags.map((tag, index) => (
            <div key={index}>
              <button className="btn bg-[#DAFBDC] rounded-2xl">{tag}</button>
            </div>
          ))}
        </div>
        <div>
          <p className="text-center text-gray-500 text-[16px]">
            "{friend.bio}"
          </p>
        </div>
        <div>
          <p className="text-center text-gray-500 text-[16px]">
            {friend.email}
          </p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow col-span-1 row-span-1 flex flex-col justify-center">
        <h3 className="font-semibold text-[30px] text-center">
          {friend.days_since_contact}
        </h3>
        <p className="text-gray-400 text-[18px] text-center">
          Days Since Contact
        </p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow col-span-1 flex flex-col justify-center">
        <h3 className="font-semibold text-[30px] text-center">{friend.goal}</h3>
        <p className="text-gray-400 text-[18px] text-center">Goal (Days)</p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow col-span-1 flex flex-col justify-center">
        <h3 className="font-semibold text-[30px] text-center">
          {friend.next_due_date}
        </h3>
        <p className="text-gray-400 text-[18px] text-center">Next Due</p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow col-span-3 row-span-1 flex flex-col justify-center gap-3">
        <div className="flex justify-between  w-full">
          <h3 className="font-medium text-[20px] text-center">
            Relationship Goal
          </h3>
          <button className="btn ">Edit</button>
        </div>
        <div className="flex   w-full">
          <h3 className=" text-[20px] text-center text-gray-400">
            Connect every{" "}
            <span className="font-bold text-black">{friend.goal} days</span>
          </h3>
        </div>
      </div>

      <div className=" col-span-2 flex flex-col justify-center gap-10">
        <div className="bg-white p-2 rounded shadow flex gap-2 justify-center items-center">
          <RiNotificationSnoozeLine className="text-center text-xl font-semibold" />
          <p className="text-center text-xl font-semibold">Snooze 2 weeks</p>
        </div>
        <div className="bg-white p-2 rounded shadow flex gap-2 justify-center items-center">
          <FiArchive className="text-center text-xl font-semibold" />
          <p className="text-center text-xl font-semibold">Archive</p>
        </div>
        <div className="bg-white p-2 rounded shadow flex gap-2 justify-center items-center text-red-600">
          <FaRegTrashAlt className="text-center text-xl font-semibold" />
          <p className="text-center text-xl font-semibold">Delete</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl shadow col-span-3 row-span-1 flex flex-col justify-center gap-3">
        <div className="flex justify-between  w-full">
          <h3 className="font-medium text-[20px] text-center">
            Quick Check-In
          </h3>
        </div>


        <div className="grid grid-cols-3 gap-3">
            <div className="bg-base-200 rounded-xl flex flex-col justify-center items-center py-5 px-5 border border-base-300 gap-2 cursor-pointer" onClick={()=>setTimeLine(friend.name,"Call")}>
    <LuPhoneCall className="h-8 w-8 font-bold" />
    <p  className="text-[18px]" >Call</p>
            </div>
            <div className="bg-base-200 rounded-xl flex flex-col justify-center items-center py-5 px-5 border-base-300 gap-2 cursor-pointer" onClick={()=>setTimeLine(friend.name,"Text")}>
    <LuMessageSquareText className="h-8 w-8 font-bold"/>
    <p  className="text-[18px]">Text</p>
            </div>
            <div className="bg-base-200 rounded-xl flex flex-col justify-center items-center py-5 px-5 border-base-300 gap-2 cursor-pointer" onClick={()=>setTimeLine(friend.name,"Video")}>
    <VscDeviceCameraVideo className="h-8 w-8 font-bold" />
    <p  className="text-[18px]">Video</p>
            </div>
        </div>
      </div>
      {/* <div className="bg-white p-8 rounded-2xl shadow">
        <h3 className="font-semibold text-[30px] text-center">10</h3>
        <p className="text-gray-400 text-[18px] text-center">Total Friends</p>
      </div> */}
    </div>
  );
};

export default CardDetails;
