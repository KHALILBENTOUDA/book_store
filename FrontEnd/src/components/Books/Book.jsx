import React, { useState } from "react";
import bookImage from "../../assets/images/9C25DD930E7559E2E0F8944EFEAF629775CD2E4D.jpeg";
import { Link } from "react-router-dom";

const Book_page = () => {
  const [count, setcount] = useState(0)

  const handlePlus = ()=>{
    setcount(count+1);
  }
  const handleMines = ()=>{
    setcount(count-1)
  }
  
  return (
    <section className="container  w-[80%] mx-auto pt-[100px]">
      {/* <Link to={`/books/${slag}`}></Link> */}
      <div className="flex justify-center max-md:flex-col gap-5 ">
        <div className="flex justify-center  p-5 max-md:pt-5 rounded-xl border border-slate-200 shadow-sm w-[40%] max-md:w-full max-lg:w-[60%] ">
          <img
            className=" w-[80%] md:w-[100%] rounded-xl"
            src={bookImage}
            alt=""
          />
        </div>
        <div className=" p-5 rounded-xl border border-slate-200 shadow-sm">
          <span className="gogo text-grn font-bold text-[12px] py-1.5 px-3 rounded-md ">
            IN STOCK
          </span>
          <h2 className="font-bold text-3xl pt-4">Title of the product</h2>
          <div className="">
            <div className="my-2 text-ms text-yellow-400 border-r-[1.5px] inline-block pr-3">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <span className="font-bold opacity-30 px-3">(140)</span>
          </div>
          <div className="font-bold text-grn text-xl">
            <span>120$ - </span>
            <span>200$</span>
          </div>
          <p className=" opacity-40 text-sm pt-4 pb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            architecto voluptate veniam sint dolorem delectus quisquam
            doloremquepsa impedit.
          </p>
          <div className="py-3.5 font-bold text-grn text-xl">120$</div>
          <hr className="shadow-sm" />
          <p className="py-3 font-medium opacity-60 text-[14px]">Qauntity</p>
          <div className=" flex items-center">
            <div className="w-[110px] bg-slate-100 rounded-2xl font-bold flex justify-around items-center">
              <span onClick={handleMines} className=" cursor-pointer p-1">-</span>
              <span>{count < 0 ? setcount(0) : count}</span>
              <span onClick={handlePlus} className=" cursor-pointer p-1">+</span>
            </div>
            <button className="p-1.5 transition duration-150 ease-in-out  rounded-2xl bg-grn font-bold text-white text-sm px-6 mx-5 hover:scale-105">
              {" "}
              <i className="fa-solid fa-shopping-bag px-1"></i> Add to cart
            </button>
            <button className=" opacity-60 text-sm">
              {" "}
              <i className="fa-regular fa-heart "></i> Add to FavoritLIn
            </button>
          </div>
          <hr className="shadow-sm my-5" />
          <div className=" text-tex  opacity-40 text-[13px] flex ">
            Categories:{" "}
            <p className="font-bold text-black  text-[13px] px-2">
              BooksCategory,Action,...
            </p>{" "}
          </div>
          <div className=" text-tex  opacity-40 text-[13px] flex">
            type:{" "}
            <p className="font-bold text-black  text-[13px] px-2">
              book,fuctional
            </p>
          </div>
          <div className="w-[130px] py-4 opacity-50  flex justify-between">
            <i className="fa-brands fa-facebook text-xl"></i>
            <i className="fa-brands fa-twitter text-xl"></i>
            <i className="fa-brands fa-telegram text-xl"></i>
            <i className="fa-brands fa-pinterest text-xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book_page;
