import React from 'react'
import ItemesTitle from '../../utils/ItemsTitle'
import offerImage from '../../assets/images/_methode_times_prod_web_bin_539ee62a-4d3f-11ec-a89c-4bee41baeb9c.jpg'
import offerImage2 from '../../assets/images/_methode_times_prod_web_bin_8badc0ee-4d4f-11ec-a89c-4bee41baeb9c.jpg'
const Offer = () => {
    const offer=[
        {image:offerImage, price:'25%' ,off:'NEW OFFERS FOR SALE'},
        {image:offerImage2, price:'45%' ,off:'NEW OFFERS FOR SALE'},
    ]
  return (
    <section className='container  w-[80%] mx-auto'>
        <ItemesTitle type={'Offers'} />
        <div className="   grid grid-cols-1  md:grid-cols-2 gap-7 ">
            {
                offer.map((ele)=>{
                    return(
                        <div className="transition-all relative hover:scale-105">
                            <img className=' rounded-[20px]  shadow-xl ' src={ele.image} alt="" />
                            <div className=' absolute w-full h-full  top-0 rounded-[20px] bg-gradient-to-l from-25%  from-transparent to-offer to-50% p-10 '>
                                <p className='text-[8px] font-bold'>{ele.off}</p>
                                <h1 className='font-bold text-[30px] pt-2 pb-10'>Sale {ele.price} OFF</h1>
                                <button className='btn rounded-[20px] bg-white text-[12px] font-bold px-4 py-1'>Shop Now <i className='fa-solid fa-angle-right pl-[5px]'></i></button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    </section>
  )
}

export default Offer
