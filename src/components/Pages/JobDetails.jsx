import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import "./Jobdetails.css";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { FaSquarePhone } from "react-icons/fa6";
import { SiMinutemailer } from "react-icons/si";
import { IoLocationSharp } from "react-icons/io5";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../utility/LocalStroage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const {
    description,
    responsibility,
    experiences,
    image,
    company_name,
    job_title,
    salary,
    contact,
  } = job;

  //handle apply button
  const handleApply = () => {
    saveJobApplication(idInt);
    toast.success("Apply Job Successfully");
  };

  return (
    <div className="bg-white text-black">
      <h1 className="   text-center font-bold text-2xl backgroundImage bg-green-50 ">
        Job Details
      </h1>

      {/* Deteails */}

      <div className="max-w-7xl mx-auto md:p-1 p-2 ">
        <div className="grid gap-7 md:grid-cols-5 md:my-14 ">
          {/* Description */}
          <div className="  md:col-span-3">
            <h1 className="my-2">
              <span className="font-bold">Job Description</span> : {description}
            </h1>
            <h1 className="my-2">
              <span className="font-bold">Job Responsibility</span> :{" "}
              {responsibility}
            </h1>
            <h1 className="my-2">
              <span className="font-bold">Educational Requirements:</span> :{" "}
              <br /> {job.education_requirements}
            </h1>
            <h1 className="my-2">
              <span className="font-bold">Experiences::</span> : <br />{" "}
              {experiences}
            </h1>
          </div>

          {/* Job Apply */}
          <div className="bg-green-100 md:px-5 px-2 rounded md:col-span-2">
            <div className="flex justify-between items-center border-b-2 border-green-200 mx-auto mb-2 pb-2">
              <h1 className="font-bold my-2 ">Job Details</h1>
              <img className="w-28 h-14 my-2" src={image} alt="" />
            </div>
            <span className="flex items-center  gap-2">
              <HiBuildingOffice2 />{" "}
              <p>
                {" "}
                <span className="font-bold">Company </span> : {company_name}{" "}
              </p>
            </span>
            <span className="flex items-center my-2 gap-2">
              <SlCalender />{" "}
              <p>
                <span className="font-bold">Job Title </span> : {job_title}{" "}
              </p>
            </span>{" "}
            <span className="flex items-center  gap-2">
              <RiMoneyCnyCircleLine />{" "}
              <p>
                {" "}
                <span className="font-bold">Salary </span> : {salary} (Per
                Month)
              </p>
            </span>
            <h1 className="font-bold my-2 border-b-2  py-4 border-green-300 mx-auto">
              Contact Information
            </h1>
            <span className="flex items-center gap-2">
              <FaSquarePhone />{" "}
              <p>
                <span className="font-bold">Phone</span> : {contact.phone}{" "}
              </p>
            </span>
            <span className="flex items-center gap-2 my-2">
              <SiMinutemailer />{" "}
              <p>
                <span className="font-bold">Email</span> : {contact.email}{" "}
              </p>
            </span>
            <span className="flex items-center gap-2 my-2">
              <IoLocationSharp />{" "}
              <p>
                <span className="font-bold">Address</span> : {contact.address}{" "}
              </p>
            </span>
            <Link>
              <button
                onClick={handleApply}
                className="w-full p-2 focus:bg-green-600 rounded  my-2 bg-black text-white"
              >
                Apply Now
              </button>
            </Link>
          </div>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
