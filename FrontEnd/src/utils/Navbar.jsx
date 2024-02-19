import React from 'react'

const Navbar = () => {

  const ico=['user','heart','bell']
  const nav=['Home','Books','Contact US','About US']
  return (
    <section className='text-tex'>
      <div className="container myFlex justify-between mx-auto py-[8px]">
          <h1 className='text-[30px] font-bold'>LOGO</h1>
          <div className="">
              <input className='py-[5px] px-[10px] w-[400px] bg-kfif rounded-[30px]' type="search" name="" id="" placeholder='Search...' />
              <span className=' bg-grn py-[6px] px-[25px] rounded-[30px] text-slate-200'>
                <i className='fa-solid fa-search text-[15px]'></i>
              </span>
          </div>

          <span className='text-[20px] text-Top myFlex '>
            {
              ico.map((ele)=>{
                  return (
                    <div className="pl-[26px]">
                      <i className={`fa-regular fa-${ele}`}></i>
                    </div>
                  )
              })
            }
          </span>
          
      </div>
      <hr />
      <div className="container mx-auto py-[20px] myFlex font-bold">
            <div className="myFlex  text-kfif bg-grn inline-flex px-[10px] py-[4px] rounded-[30px] text-[15px] ">
              <i className='fa-solid fa-bars pr-[5px]'></i>
                <p>Category</p>
              <i className='fa-solid fa-chevron-down pl-[70px]'></i>
            </div>
            <ul className='myFlex justify-around translate-x-[50%]'>
              {
                nav.map((item)=>{
                  return (
                        <li className='px-[20px]'>
                          <a className=' hover:text-grn transition–[1s ease-out]' href="">{item}</a>
                        </li>
                  )
                })
              }
            </ul>
      </div>
    </section>
  )
}

export default Navbar
