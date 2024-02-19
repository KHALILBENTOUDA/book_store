import React, { useState } from "react";
import Dsec_content from "./content_decription/Dsec_content";
import Additional_content from "./content_decription/Additional_content";
import Vandor from "./content_decription/Vandor";
import Reviews from "./content_decription/Reviews";



const Dsescriptin = () => {
  const [stayle, setstayle] = useState(" cursor-pointer  border-b-[3px]  max-sm:border-b-[1px]   border-white   opacity-40 focus:border-b-[3px] focus:border-grn focus:opacity-100 py-3 max-sm:focus:border-b-[1px] ")
  const [button_content, setbutton_content] = useState("")

  const disc_content = [
    {title:'Dsiciption',key:1},
    {title:'Additional Infomations',key:2},
    {title:'Revews',key:3},
    {title:'Vendor Info',key:4},
  ]

  const handle=(e)=>{
    setbutton_content(e.target.innerHTML)
  }
  return (
    <section className="container  w-[80%] mx-auto pt-[100px]">
      <div className="flex justify-center items-center w-full gap-3 text-[7px] font-bold sm:text-[15px]  md:gap-16 focus:dark:bg-slate-300 px-1 ">
        {
          disc_content.map((ele)=>{
           return (
              <button key={ele.key}  className={stayle} onClick={handle}>{ele.title}</button>
            )
          })
        }
      </div>
      <div className="p-4 sm:p-8  rounded-xl border border-slate-200 shadow-sm ">
        {
         button_content === "Vendor Info"? <Vandor/>:
            button_content === "Additional Infomations"?<Additional_content/>:
              button_content === "Revews"?<Reviews/>:<Dsec_content/>
        }
      </div>
    </section>
  );
};

export default Dsescriptin;

// focus:border-b-[3px] border-grn focus:opacity-100 
