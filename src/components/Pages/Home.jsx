import React from "react";

import Hero from "../Hero/Hero";
import JobCategoryList from "../JobcategoryList/JobCategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <>
      <Hero />
      <JobCategoryList />
      <FeaturedJobs />
    </>
  );
};

export default Home;
