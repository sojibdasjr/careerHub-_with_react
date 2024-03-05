import React from "react";
import account from "../../assets/icons/accounts.png";
import design from "../../assets/icons/creative.png";
import marketing from "../../assets/icons/marketing.png";
import engineering from "../../assets/icons/chip.png";

const JobCategoryList = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center  ">
        <h1 className=" text-4xl  mt-10">Job Category List</h1>
        <small className="pt-1">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </small>
      </div>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 pt-4 mx-5 mb-5 text-white ">
        <div className="bg-gray-600 p-5 m-1 rounded  cursor-pointer">
          <img className="bg-gray-100 p-3 rounded" src={account} alt="" />
          <h1 className="text-xl font-bold py-2">Account & Finance</h1>
          <p className="opacity-50">300 Jobs Available</p>
        </div>
        <div className="bg-gray-600 p-5 m-1 rounded  cursor-pointer">
          <img className="bg-slate-200 p-3 rounded" src={design} alt="" />
          <h1 className="text-xl font-bold py-2">Creative Design</h1>
          <p className="opacity-50">100+ Jobs Available</p>
        </div>
        <div className="bg-gray-600 p-5 m-1 rounded  cursor-pointer">
          <img className="bg-slate-200 p-3 rounded" src={marketing} alt="" />
          <h1 className="text-xl font-bold py-2">Marketing & Sales</h1>
          <p className="opacity-50">150 Jobs Available </p>
        </div>
        <div className="bg-gray-600  p-5 m-1 rounded  cursor-pointer">
          <img className="bg-slate-200 p-3 rounded" src={engineering} alt="" />
          <h1 className="text-xl font-bold py-2">Engineering Job</h1>
          <p className="opacity-50">224 Jobs Available</p>
        </div>
      </section>
    </div>
  );
};

export default JobCategoryList;
