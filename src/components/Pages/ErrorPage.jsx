import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Oppos !</h1>
      <h1>Page not Found</h1>
      <Link to="/" className="p-5 bg-slate-200">
        Back
      </Link>
    </div>
  );
};

export default ErrorPage;
