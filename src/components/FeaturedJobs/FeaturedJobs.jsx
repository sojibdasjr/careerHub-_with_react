import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("fakeData.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="bg-slate-50 pt-8">
      <div className="text-center text-black  py-2">
        <h1 className="text-5xl">Featured Jobs</h1>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid md:grid-cols-2 items-center gap-2  my-5 max-w-7xl mx-auto">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div
        className={dataLength === jobs.length ? "hidden" : " flex items-center"}
      >
        <button
          className=" p-2 bg-black w-40 rounded my-5 mx-auto"
          onClick={() => setDataLength(jobs.length)}
        >
          Show All Data{" "}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
