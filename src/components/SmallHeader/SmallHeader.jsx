import React from "react";

import { SiMinutemailer } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";

const SmallHeader = () => {
  return (
    <div className="lg:flex  bg-green-400 justify-around  items-center px-5 ">
      <h1 className=" text-white items-start ">
        world best job portal is{" "}
        <span>
          <span className="bg-purple-400 p-0.5 rounded-s">career</span>
          <span className="bg-sky-400 p-0.5 rounded-e">hub</span>
        </span>
      </h1>
      <div className="flex gap-2">
        <a href="#" className="flex items-center">
          <SiMinutemailer className="text-white" />{" "}
          <small className="text-white">contact@careerhub.com</small>
        </a>
        <a href="#" className="flex items-center">
          <MdLocationOn className="text-white" />
          <small className="text-white">contact@careerhub.com </small>
        </a>
      </div>
    </div>
  );
};

export default SmallHeader;
