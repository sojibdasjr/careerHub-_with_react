import React from "react";
import { Link } from "react-router-dom";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";

const AppliedJobLayout = ({ job }) => {
  return (
    <div className=" bg-slate-50">
      <div className=" grid-cols-1 md:max-w-4xl md:mx-auto  border my-2  border-black md:flex justify-between items-center p-2 mx-2">
        <div className="text-black md:flex gap-2">
          <img
            className="md:w-44 border-green-200 border"
            src={job.image}
            alt=""
          />

          <div>
            <h1 className="text-3xl font-bold">{job.job_title}</h1>
            <h1 className="opacity-50">{job.company_name}</h1>
            <div>
              <button className="p-1 border border-black">
                {job.remot_or_onsite}
              </button>
              <button className="p-1 border border-black ms-2">
                {job.job_time}
              </button>
            </div>
            <span className="flex items-center  gap-1">
              <RiMoneyCnyCircleLine />{" "}
              <p>
                {" "}
                <span className="font-bold">Salary </span> : {job.salary} (Per
                Month)
              </p>
            </span>

            <span className="flex items-center gap-1 my-1">
              <IoLocationSharp />{" "}
              <p>
                <span className="font-bold">Address</span> :{" "}
                {job.contact.address}{" "}
              </p>
            </span>
          </div>
        </div>
        <div className="flex justify-between md:gap-2 me-4">
          <Link to="/">
            <button className="bg-green-600 p-2 rounded text-white">
              View Details
            </button>
          </Link>
          <Link to="#">
            <button className="bg-red-600 p-2 rounded text-white">
              Delete
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobLayout;
