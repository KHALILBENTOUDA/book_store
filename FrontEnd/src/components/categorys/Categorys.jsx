import React, { useState } from 'react'
import ItemesTitle from '../../utils/ItemsTitle'
import { Carousel } from 'react-responsive-carousel'
import { useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'

const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 1150,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 5,
            },
          },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            slidesToShow: 1,
          },
        },
      ],
    }



const Categorys = () => {
           
    const [categorys, setcategorys] = useState([])
    
    const handel=async()=>{
        const data_Category=await axios.get('http://localhost:5000/api/v1/category')
        setcategorys(data_Category.data.data)

    }

    useEffect(() => {
        handel()
    }, [])
    

    console.log(categorys)

    if(localStorage.getItem("token")){
      console.log('yes')
    }else{
      console.log('no')
    }

    const dataUser=localStorage.getItem("token")
    const user=JSON.parse(dataUser)


  return (
    <section className='container  w-[80%]  mx-auto'>
        <ItemesTitle type={'Categorys'} more={'more'}/>

            <Slider {...settings}>
                {
                    categorys.map((items)=>{
                        return (
                            <div className="flex   justify-between ">
                                <div className="btn2 flex justify-center  w-[130px] h-[120px]  p-3  my-5 categoryStyle  items-center shadow-sm   text-grn flex-col bg-slate-100  ">
                                  {/* <img className='w-20px category_imge '  src={`http://localhost:5000/uploads/${items.Emage}`} alt="" /> */}
                                    <h1 className=' font-mono font-bold text[] max-md:text-[10px]'>
                                         {items.CatogryName}
                                    </h1>
                                </div>
                            </div>
                        )
                    })
                }

            </Slider>
    </section>
  )
}
export default Categorys
