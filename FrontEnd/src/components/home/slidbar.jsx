import React from 'react'
import imag from '../../assets/images/9C25DD930E7559E2E0F8944EFEAF629775CD2E4D.jpeg'
const Slidbar = () => {
  return (
    <section className='bg-grn'>
        <div className="container mx-auto grid grid-cols-2 text-kfif font-bold">
            <div className="w-[100%] translate-y-20">
                <p className='text-[12px] opacity-60 '>SPECHIAL OFFER</p>
                <h1 className='text-[40px] font-bold py-[10px]'>there is nothing <br /> butter than to read</h1>
                <p className='pb-[15px] opacity-60'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Maiores minus doloribus, aut ea voluptat</p>
                <button className=' bg-white text-grn font-bold px-[15px] py-[4px] rounded-[30px]'>Read More </button>
            </div>
            <div className='w-[100%]  bg-red-50 '>
                <img className='w-full h-[400px]' src={imag} alt="" srcset="" />
            </div>
        </div>
        
    </section>
  )
}

export default Slidbar
