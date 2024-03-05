import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  const { job_title } = job;
  return (
    <div>
      <h1>Job Details : {job_title} </h1>
    </div>
  );
};

export default JobDetails;
