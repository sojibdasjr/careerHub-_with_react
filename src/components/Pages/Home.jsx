import React from "react";
import heroPhoto from "../../assets/images/user.png";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <div className="md:flex items-center max-w-7xl mx-auto px-2 ">
        <div className="text-black">
          <h1 className="text-7xl font-bold">
            One Step <br /> Closer To Your <br />{" "}
            <span className="text-green-400 my-2">Dream Job</span>
          </h1>
          <p className="opacity-50 my-2">
            Explore thousands of job opportunities with all the information you{" "}
            <br />
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="p-2 my-2 font-bold bg-green-300 rounded">
            Get Start
          </button>
        </div>
        <div>
          <img src={heroPhoto} alt="Hero section Photos" />
        </div>
      </div>
    </div>
  );
};

export default Home;
