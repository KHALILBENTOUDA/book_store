import React from 'react'
import image from '../../assets/images/IMG-20231029-WA0009-removebg-preview.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

const itmes=[
    {title:`there is nothing butter than to read`,  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Maiores minus doloribus, aut ea voluptat' ,image},
    {title:'there is nothing butter than to read',  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Maiores minus doloribus, aut ea voluptat' ,image},
    {title:'there is nothing butter than to read',  text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Maiores minus doloribus, aut ea voluptat' ,image}
]

const CarouselHome = () => {

  return (
    <section  className='pt-[100px]  max-md:pt-[110px]  bg-gradient-to-r from-40% from-grn to-90%  to-lgrn '>
        <Carousel className='container  mx-auto '>   
               {
                itmes.map((ele)=>{
                    return (
                        <div className=" mx-auto grid  grid-cols-1  md:grid-cols-2 max-md:text-center text-kfif text-start place-items-center w-full">
                        <div className="w-[80%]">
                            <p className='text-[12px] opacity-60 '>SPECHIAL OFFER</p>
                            <h1 className='text-[35px]  py-[10px] font-bold '>{ele.title}</h1>
                            <p className='max-md:w-[80%] mx-auto text-[12px] pb-[25px] opacity-60'>{ele.text}</p>
                            <button className=' btn shadow-inner shadow-slate-500   bg-white text-grn font-bold px-[15px] py-[4px] rounded-[30px]'>Read More <i className='fa-solid fa-angle-right pl-[10px]'></i> </button>
                        </div>
                        <div className='w-[80%] mx-auto'>
                            <img className='' src={ele.image} alt="" srcset="" />
                        </div>
                    </div>
                    )
                })
               }

    
        </Carousel>
    </section>

  )
}

export default CarouselHome
