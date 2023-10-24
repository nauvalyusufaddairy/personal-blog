"use client";
import { useState } from "react";
import { AiOutlineShrink, AiOutlineExpandAlt } from "react-icons/ai";
import { BiSolidDashboard } from "react-icons/bi";
import { motion, useAnimationControls } from "framer-motion";
import { BsPenFill, BsFillPostcardFill } from "react-icons/bs";
import Tiptap from "@/components/TipTap";

export default function CMS() {
  const [toogle, setToogle] = useState(false);
  const [sidebarSelector, setSidebarSelector] = useState("dashboard");

  return (
    <div>
      {/* CMS Container */}
      <div className="w-screen h-screen flex flex-row">
        {/* Left */}
        <motion.div
          className={` ${
            toogle ? "w-[5%]" : "w-[20%]"
          }  h-full flex flex-col px-[18px] gap-4 text-xl duration-300 `}>
          <motion.div
            className="w-full flex justify-end mt-6 hover:cursor-pointer text-black/50 font-[500]"
            onClick={() => setToogle(!toogle)}>
            <motion.div className={`${toogle ? "hidden" : "block"}`}>
              {" "}
              <AiOutlineShrink />
            </motion.div>
            <motion.div className={`${toogle ? "block" : "hidden"}`}>
              <AiOutlineExpandAlt />
            </motion.div>
          </motion.div>
          {/* dashboard option */}
          <div
            onClick={() => setSidebarSelector("dashboard")}
            className={`w-full text-black/50 font-[500] hover:cursor-pointer `}>
            <div
              className={` ${
                sidebarSelector === "dashboard"
                  ? " text-purple-800 px-[4px] py-[4px] rounded-md bg-purple-200"
                  : ""
              }  ${toogle ? "flex justify-center" : "hidden"}`}>
              {" "}
              <BiSolidDashboard />
            </div>

            <div
              className={`${toogle ? " hidden" : "block "} ${
                sidebarSelector === "dashboard"
                  ? " bg-purple-200 text-purple-800 px-4 py-2 rounded-md"
                  : ""
              }`}>
              Dashboard
            </div>
          </div>
          {/* compose option */}
          <div
            onClick={() => setSidebarSelector("compose")}
            className={`w-full text-black/50 font-[500] hover:cursor-pointer `}>
            <div
              className={` ${
                sidebarSelector === "compose"
                  ? " text-purple-800 px-[4px] py-[4px] rounded-md bg-purple-200"
                  : ""
              }  ${toogle ? "flex justify-center" : "hidden"}`}>
              {" "}
              <BsPenFill />
            </div>

            <div
              className={`${toogle ? " hidden" : "block "} ${
                sidebarSelector === "compose"
                  ? " bg-purple-200 text-purple-800 px-4 py-2 rounded-md"
                  : ""
              }`}>
              Compose
            </div>
          </div>
          {/* posts option */}
          <div
            onClick={() => setSidebarSelector("posts")}
            className={`w-full text-black/50 font-[500] hover:cursor-pointer `}>
            <div
              className={` ${
                sidebarSelector === "posts"
                  ? " text-purple-800 px-[4px] py-[4px] rounded-md bg-purple-200"
                  : ""
              }  ${toogle ? "flex justify-center" : "hidden"}`}>
              {" "}
              <BsFillPostcardFill />
            </div>

            <div
              className={`${toogle ? " hidden" : "block "} ${
                sidebarSelector === "posts"
                  ? " bg-purple-200 text-purple-800 px-4 py-2 rounded-md"
                  : ""
              }`}>
              Posts
            </div>
          </div>
        </motion.div>
        {/* Right */}
        <div
          className={` overflow-y-scroll ${
            toogle ? "w-[95%]" : "w-[80%]"
          }  h-screen bg-gray-200/50`}>
          <SidebarContent options={sidebarSelector} />
        </div>
      </div>
    </div>
  );
}

const SidebarContent = ({ options }: { options: string }) => {
  switch (options) {
    case "compose": {
      return (
        <div className="w-full flex justify-center">
          <div className="w-[80%] bg-white">
            <Tiptap />
          </div>
        </div>
      );
    }
    default: {
      return (
        <div className="w-full flex justify-center">
          <div className="w-[80%] bg-white">
            <Tiptap />
          </div>
        </div>
      );
    }
  }
};
