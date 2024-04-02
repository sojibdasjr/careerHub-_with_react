import React from "react";

import Hero from "../Hero/Hero";
import JobCategoryList from "../JobcategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <>
      {/* Hero comonponents */}
      <Hero />
      {/* JobcategoryList comonponents */}
      <JobCategoryList />
      {/* FeaturedJobs comonponents */}
      <FeaturedJobs />
    </>
  );
};

export default Home;
