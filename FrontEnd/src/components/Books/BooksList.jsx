import React from 'react';
import bookImage from "../../assets/images/9C25DD930E7559E2E0F8944EFEAF629775CD2E4D.jpeg";
import ItemesTitle from '../../utils/ItemsTitle';
import { Link } from 'react-router-dom';
import Book_page from './Book';
const BookCard = ({ title, subtitle, price }) => {
 return (
    <div className=" shadow-xl mt-2   rounded-xl overflow-hidden overflow-x-scroll  transition duration-[0.5s] ease-in-out transform hover:scale-[1.1]">
      <div className="books transition duration-500 ease-in-out  text-white  relative m-2">
            <img src={bookImage} className=" bg-cover bg-center rounded-xl w-full h-[80%]"/>

            <div className="book_content absolute  text-center  h-[200%] -bottom-[100%] hover:bottom-0  flex flex-col justify-end  text-[13px] px-2 w-full">
                {/* <h1 className="text-[25px] font-bold mb-4">{ele.title}</h1> */}
                <div className="">
                  <button className=" transition rounded-[20px] bg-lgrn px-2.5 py-1  hover:scale-[1.1] m-10">
                    See More
                  </button>
                </div>
              </div>
      </div>
      <div className="px-3">
        <h3 className="text-gray-500 mb-2 font-bold  overflow-x-scroll text">{title}</h3>
        <div className="flex flex-row items-center">
          <div className="text-black font-bold text-md mb-2">${price.toFixed(2)}</div>
          <div className="font-bold text-[12px] mb-2 ml-5 text-red-500">${price.toFixed(2)}</div>
        </div>
      </div>
    </div>
 );
};

const BooksList = ({title}) => {
 const books = [
    { title: 'Shadow Bone and ...', subtitle: 'My Dearest Darkest', price: 170.03 },
    { title: 'Enceladus Heartland', subtitle: 'Heartland Stars', price: 439.83 },
    { title: 'Warrior My Dearest', subtitle: 'My Dearest Darkest', price: 814.66 },
    { title: 'Terror Life Flight', subtitle: 'Life Flight', price: 216.98 },
    { title: 'Terror Life Flight', subtitle: 'Life Flight', price: 216.98 },
    { title: 'Shadow Bone and ...', subtitle: 'My Dearest Darkest', price: 170.03 },
    { title: 'Enceladus Heartland', subtitle: 'Heartland Stars', price: 439.83 },
    { title: 'Warrior My Dearest', subtitle: 'My Dearest Darkest', price: 814.66 },
    { title: 'Terror Life Flight', subtitle: 'Life Flight', price: 216.98 },
    { title: 'Terror Life Flight', subtitle: 'Life Flight', price: 216.98 },
 ];

 return (
      <section className='container  w-[80%] mx-auto pt-10 '>
              <ItemesTitle type={title?title:"Books["} more={"more"} />
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 ">
                  {books.map((book, index) => (
                    <>
                       <Link to={`/book/1`}>
                         <BookCard key={index} title={book.title} subtitle={book.subtitle} price={book.price} />
                       </Link>
                    </>
                  ))}
            </div>
      </section>
 );
};

export default BooksList;