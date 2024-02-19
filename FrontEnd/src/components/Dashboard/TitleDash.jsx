import React from 'react'

const TitleDash = ({title,ActionButtonCreate,ActionButtonShow}) => {
  return (
    <div className='p-3 bg-grn rounded-t-xl flex items-center '>
      <h1 className='font-bold text-lg text-white w-full' >{title}</h1>
      <div className="flex justify-end w-full">
        <button className='btn2 bg-green-500 px-4 py-2 rounded-2xl font-bold text-xs text-white flex items-center mx-5 '><i className='fa-solid fa-plus font-bold text-[17px] pr-3'></i>  {ActionButtonCreate}</button>
        <button className='btn2 bg-white text-tex  px-4 py-2 rounded-2xl font-bold text-xs  flex items-center '><i className='fa-solid fa-eye font-bold text-[17px] pr-3'></i>  {ActionButtonShow}</button>
      </div>
    </div>
  )
}

export default TitleDash