import React, { useState } from "react";
import TitleDash from "./TitleDash";
import AddCategory from "./Creates/AddCategory";
import AddBook from "./Creates/AddBook";


const Dashboard = () => {
  const [list, setlist] = useState([
        {name:"Dashboard"},
        {name:"Books"},
        {name:"Categorys"},
        {name:"Users"},
  ])
  const [chse, setchse] = useState("")
  const handleclick=(e)=>{
    setchse(e.target.innerHTML)
  }
  console.log(chse)
  return (
    <section className="h-[100vh]">
      <div className="flex h-full  gap-4 ">
        <div className=" w-[20%] bg-black text-white  px-7 py-5   border-slate-300 shadow-lg my-[20px] ml-[10px]  rounded-xl  ">
            <div className="flex items-center">
                  <div className="w-[32px] h-[32px] rounded-3xl  bg-grn flex items-center justify-center font-bold text-xl">
                        <div className="">A</div>
                  </div>
                  <h1 className="px-2 font-bold">KHALIL BEN TOUDA </h1>
            </div>
          <ul className="py-10">
            {
                  list.map((ele)=>{
                        return (
                              <li onClick={handleclick} className=" transition   duration-150 cursor-pointer  ease-in-out py-3.5 text-sm">
                                <button className="focus  transition   duration-150  focus:text-lgrn  opacity-70  hover:opacity-100 focus:opacity-100 focus:translate-x-3 ">
                                 {ele.name}
                                </button>
                              </li>
                        )
                  })
            }
          </ul>
        </div>
        <div className=" rounded-xl border border-slate-300 shadow-md my-[20px]  mr-[20px]  w-[80%] bg-slate-50 overflow-auto ">
          {
            chse == "Books"?(<AddBook/>):(<AddCategory/>)
          }
          {/* <TEST/>
          <AddBook/> */}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
