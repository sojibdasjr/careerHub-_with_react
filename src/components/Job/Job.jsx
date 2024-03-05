import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { RiMoneyCnyCircleLine } from "react-icons/ri";

const Job = ({ job }) => {
  const {
    id,
    image,
    job_title,
    company_name,
    contact,
    job_time,
    job_time2,
    salary,
  } = job;

  return (
    <div className=" px-5 border border-black mx-2 md:mx-0 mb-2">
      <img className=" w-40 " src={image} alt="" />
      <h1 className="font-bold text-black text-2xl tracking-wide">
        {job_title}
      </h1>
      <h1 className="opacity-70 text-black">{company_name}</h1>
      <div>
        <button className="p-1 border border-black text-sm text-black my-1 ">
          {job_time}
        </button>
        <button className="p-1 border border-black text-black text-sm my-1 ms-4 ">
          {job_time2}
        </button>
      </div>
      <div className="md:flex gap-6 ">
        <div className="flex items-center gap-1 my-2">
          <IoLocationSharp />
          <small>{contact.address}</small>
        </div>
        <div className="flex items-center gap-1">
          <RiMoneyCnyCircleLine />
          <small>{salary}</small>
        </div>
      </div>

      <button className="p-2 my-3 bg-black focus:bg-green-500 text-white rounded">
        View Details
      </button>
    </div>
  );
};

export default Job;
