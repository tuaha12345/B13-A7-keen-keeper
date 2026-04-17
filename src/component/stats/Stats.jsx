import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";
import { useContext } from "react";
import { TimelineContext } from "../../context/TimelineContext";



const Stats = ({ isAnimationActive = true }) => {

    const { timeline } = useContext(TimelineContext);
    const totalCall= timeline.filter((item) => item.timelineType === "Call").length;
    const totalText= timeline.filter((item) => item.timelineType === "Text").length;
    const totalVideo= timeline.filter((item) => item.timelineType === "Video").length;

    const data = [
  { name: "Group A", value: totalText, fill: "#7F37F5" },
  { name: "Group B", value: totalCall, fill: "#244D3F" },
  { name: "Group C", value: totalVideo, fill: "#37A163" },

];

  return (
    <div className="container mx-auto w-11/12 mb-20 ">
      <div className="my-5">
        <h1 className="text-[48px] font-bold ">Friendship Analytics</h1>
      </div>
            { timeline.length===0?<div className="flex gap-3 bg-white p-8 py-50 rounded-xl shadow items-center justify-center">
                <h1 className="text-[48px] font-bold text-center">No timeline found</h1></div>:
      <div className="bg-white p-8 rounded-xl shadow ">
        <p className="font-semibold text-[#244D3F]">By Interaction Type</p>
        <div
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "400px",
            margin: "0 auto",
          }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                // Use a number here for rounded corners
                cornerRadius={10}
                paddingAngle={5}
                dataKey="value"
                isAnimationActive={isAnimationActive}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="flex justify-center my-5 gap-3">
            <div className="flex items-center justify-center gap-2"><p className="w-3 h-3 rounded-full bg-[#7F37F5]"></p> <p className="text-gray-500">Text</p></div>
            <div className="flex items-center justify-center gap-2"><p className="w-3 h-3 rounded-full bg-[#244D3F]"></p> <p className="text-gray-500">Call</p></div>
            <div className="flex items-center justify-center gap-2"><p className="w-3 h-3 rounded-full bg-[#37A163]"></p> <p className="text-gray-500">Video</p></div>
        </div>
      </div>}
    </div>
  );
};

export default Stats;
