import React from "react";

const FilterJob = ({ handleJobFilter }) => {
  return (
    <div className=" md:max-w-4xl md:mx-auto mx-2 pt-10 ">
      <div>
        <details className="dropdown  cursor-pointer">
          <summary className="m-1 bg-black p-3 mt-1">Filter by</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-green-100   rounded border text-black border-black w-52">
            <li onClick={() => handleJobFilter("all")}>
              <a>All</a>
            </li>
            <li onClick={() => handleJobFilter("remote")}>
              <a>Remot</a>
            </li>
            <li onClick={() => handleJobFilter("onsite")}>
              <a>Onsite</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default FilterJob;
