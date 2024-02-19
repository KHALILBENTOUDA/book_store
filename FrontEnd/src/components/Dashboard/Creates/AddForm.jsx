import React from "react";

const AddForm = ({inputs,handleSubmit,handleChange,checkEmage,texteara,textearaValue,selectCategory}) => {
  return (
     
      <form className="px-12 py-5  overflow-y-auto flex-col w-[700px]" onSubmit={handleSubmit}>
      <p className="text-black pt-2 pb-16 opacity-40 ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores itaque quasi tempora dicta dolorum, earum, provident similique eligendi ipsam rem, incidunt perspiciatis voluptatibus facilis illo aspernatur iure aliquid quis impedit!
      </p>
        {inputs.map((items) => {
          return (
            <div key={items.name} className="flex  flex-col  w-[600px] py-4">
              <label
                htmlFor={items.lable}
                className="block mb-2  font-bold text-lg  text-[8px] text-tex  "
              >
                {items.lable} :
              </label>

              {items.type === "file" ? (
                 <div class="flex items-center justify-center w-full">
                 <label
                   for="dropzone-file"
                   class="flex flex-col shadow   transition-all  items-center justify-center w-full h-32 border-2 text-gray-300  hover:text-grn  border-dashed rounded-xl cursor-pointer bg-white dark:hover:bg-bray-80 hover:bg-gray-100 dark:border-gray-100 dark:hover:border-grn dark:hover:bg-gray-100"
                 >
                   <div class="flex flex-col items-center justify-center pt-5 pb-6">
                     <svg
                       class="w-8 h-8 mb-4"
                       aria-hidden="true"
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 20 16"
                     >
                       <path
                         stroke="currentColor"
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         stroke-width="2"
                         d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                       />
                     </svg>
                     {checkEmage? (
                       <p class="mb-2 text-sm text-tex ">
                         <span class="font-semibold">
                           {checkEmage}
                         </span>
                       </p>
                     ) : (
                       <>
                         <p class="mb-2 text-sm ">
                           <span class="font-semibold">Click to upload</span>{" "}
                           or drag and drop
                         </p>
                         <p class="text-xs ">
                           SVG, PNG, JPG or GIF (MAX. 800x400px)
                         </p>
                       </>
                     )}
                   </div>
                   <input
                     onChange={handleChange}
                     type={items.type}
                     id="dropzone-file"
                     name={items.name}
                     className="boder    text-tex  sm:text-sm rounded-xl focus:ring-1 outline-none hidden  w-full   p-2  dark:placeholder-gray-400 font-bold dark:focus:ring-grn dark:focus:border-grn"
                   />
                 </label>
               </div>
              ) : (
                <input
                  onChange={handleChange}
                  id={items.name}
                  type={items.type}
                  name={items.name}
                  value={items.value}
                  className=" shadow  border text-tex  sm:text-xs rounded-xl  focus:ring-1 outline-none block w-full   p-3  dark:placeholder-gray-300  dark:focus:ring-grn dark:focus:border-grn"
                  placeholder={items.palce}
                />
              )}
            </div>
          );
        })}
        {
          selectCategory?(
            <>
            <select className="shadow  border text-tex  sm:text-xs rounded-xl  focus:ring-1 outline-none block w-full   p-3  dark:placeholder-gray-300  dark:focus:ring-grn dark:focus:border-grn"  name="category" id="" onChange={handleChange}  >
              {
                selectCategory.map(element =>{
                 return (
                    <option key={element._id}  value={element._id}>{element.CatogryName}</option>
                  )
                })
              }
            </select>
            </>
          ):("")
        }
        
        {
            texteara?(
                  <>
                  <h1 className="p-2  font-bold text-lg">Description :</h1>
                  <textarea onChange={handleChange}  className="boder shadow     text-tex  sm:text-sm rounded-xl focus:ring-1 outline-none   w-[600px]   p-3  dark:placeholder-gray-300  dark:focus:ring-grn dark:focus:border-grn "  name="description" id="description" value={textearaValue}  cols="30" rows="10" placeholder="Enter information about the book ..."></textarea>
                  </>
            ):("")
        }
        <button
          type="submit"
          className="btn2 w-[120px] mt-7  text-white bg-green-500  hover:bg-primary-700  font-medium rounded-3xl text-md px-5 py-1.5 text-center  hover:scale-105 transition-all"
        >
          Create
        </button>
      </form>
  );
};

export default AddForm;
