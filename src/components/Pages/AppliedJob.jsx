import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredApplication } from "../utility/LocalStroage";
import AppliedJobLayout from "../AppliedJobLayoout/AppliedJobLayout";
import FilterJob from "../FilterAppliedJob/FilterJob";

const AppliedJob = () => {
  const [appliedJob, setAppliedJob] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobIds = getStoredApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      setAppliedJob(jobsApplied);
      setDisplayJob(jobsApplied);
    }
  }, []);

  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setDisplayJob(appliedJob);
    } else if (filter === "remote") {
      const remotJobs = appliedJob.filter(
        (job) => job.remot_or_onsite === "Remote"
      );

      setDisplayJob(remotJobs);
    } else if (filter === "onsite") {
      const onsiteJob = appliedJob.filter(
        (job) => job.remot_or_onsite === "Onsite"
      );
      setDisplayJob(onsiteJob);
    }
  };
  return (
    <div>
      <h1 className="   text-center font-bold text-2xl backgroundImage text-black bg-green-50 ">
        Total Applied Job : {displayJob.length}
      </h1>
      <div className="bg-slate-50">
        <FilterJob handleJobFilter={handleJobFilter} />
      </div>
      <div className="grid">
        {displayJob.map((job) => (
          <AppliedJobLayout key={job.id} job={job}></AppliedJobLayout>
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
