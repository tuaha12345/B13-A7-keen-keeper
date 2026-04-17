import React, { use } from "react";
import { Link } from "react-router";

const Card = ({ fData }) => {
  const friend = fData;
  // console.log(friend);
  return (
    <>
      <Link to={`/friend/${friend.id}`}>
        <div
          className="card bg-white p-8 rounded-2xl shadow flex flex-col gap-3"
          key={friend.id}
        >
          <img
            src={friend.picture}
            className="border rounded-full w-24 h-24 mx-auto my-5"
          ></img>
          <h3 className="font-semibold text-[20px] text-center">
            {friend.name}
          </h3>
          <p className="text-gray-400 text-[13px] text-center">
            {friend.days_since_contact}d ago
          </p>
          <div className="flex flex-wrap justify-center gap-2  mx-auto">
            {friend.tags.map((tag, index) => (
              <div key={index}>
                <button className="btn bg-[#DAFBDC] rounded-2xl">{tag}</button>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2  mx-auto">
            <div>
              <button
                className={`btn rounded-2xl text-white ${friend.status === "Overdue" ? "bg-[#d32323]" : friend.status == "Almost Due" ? "bg-[#DCB254]" : "bg-[#344d3f]"}`}
              >
                {friend.status}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
