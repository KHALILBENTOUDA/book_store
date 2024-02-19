import React from "react";
import Categorys from "./Categorys";

const AllCategories = () => {
  return (
    <section className="container  w-[80%] mx-auto pt-10 ">
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 ">
       <Categorys/>
      </div>
    </section>
  );
};

export default AllCategories;
