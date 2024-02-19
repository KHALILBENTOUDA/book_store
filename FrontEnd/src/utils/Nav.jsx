import { avatar, button } from '@material-tailwind/react'
import { jwtDecode } from 'jwt-decode'
import React,{useEffect, useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'



const Nav = () => {


    const [hidden, sethiden] = useState(false)
    const [scro, setscro] = useState('scrolle')
    const [tok, settok] = useState(false)
    const [userData, setuserData] = useState([])
    const [fistLater, setfistLater] = useState([])

    useEffect(() => {
      if (localStorage.getItem("token")) {
        settok(true)
        const user = localStorage.getItem("token")
        const token =JSON.parse(user)
        const data=jwtDecode(token.data.token)
        setuserData(data)
    
        const later=data.email
        setfistLater(later.toUpperCase())
    }




    },[])


    const logout=()=>{
        localStorage.removeItem("token")
        window.location.reload()
    }
    
    const nac=[
        {name:'Home',  link:'/'},
        {name:'Books',  link:'/books'},
        {name:'Contact_US',  link:'/contact'},
        {name:'About_US',  link:'/about'}

    ]

    const avater=[
        {name:'Profile',link:'' ,func:'' },
        {name:'Settings' ,link:'' ,func:'' },
        {name:'Log Out'  ,link:'' ,func:logout},
    ]




    const hiddenhad=()=>{

        sethiden(!hidden)
    }


        const [isOpen, setIsOpen] = useState(false);
       
        const openDropdown = () => {
           setIsOpen(true);
        };
       
        const closeDropdown = () => {
           setIsOpen(false);
        };



  const navscrolle = useRef()
    useEffect(() => {
      window.addEventListener('scroll',()=>{
        if(window.scrollY>40){
            setscro('scrolle')
            navscrolle.current.style.height='100px'
        }else {
            navscrolle.current.style.height='200px'
        }
      })
    }, []);




   
  return (
    <section  id='navb' className='text-black w-full backdrop-blur-[10px] bg-kfif fixed z-50'>
      <nav  class=" container w-[80%] mx-auto  ">
        <div class="  max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:px-0">
        <a href="/" class="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
            <span class="self-center text-2xl font-semibold whitespace-nowrap ">Flowbite</span>
        </a>
        <div class="flex items-center   md:order-2 md:w-full lg:w-[35%] ">
            <button type="button" onClick={hiddenhad}  data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-400 dark:text-gray-400rounded-lg text-sm p-2.5 mr-1 bg-red" >  
            <svg class="w-5 h-5 max-md:w-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
            <span class="sr-only">Search</span>
            </button>
        
            <div class="relative hidden md:block md:w-[100%] ">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span class="sr-only">Search icon</span>
            </div>
            <input type="text" id="search-navbar" class="btn2  block w-full  outline-none  p-2 pl-10 text-sm text-gray-900 rounded-[20px] bg-kfif" placeholder="Search..." />
            </div>

            <button type="button"  data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="  md:ml-[20px] text-gray-400 dark:text-gray-400rounded-lg text-sm p-2.5 mr-1" >  
            <i className='fa-regular fa-heart text-[20px] max-md:text-[16px]'></i>
            </button>

            <button type="button"  data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class=" text-gray-400 dark:text-gray-400rounded-lg text-sm p-2.5 mr-1" >  
            <i className=' fa-solid fa-shopping-cart text-[20px] max-md:text-[16px]'></i>
            </button>

         <div className="relative flex items-center">

        {
            tok == true ? (
                <div className="">

                        <div type="button"   onClick={openDropdown}  data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="z-50 flex items-center justify-center  w-[30px] h-[30px] text-white bg-grn rounded-[50%] text-lg  ml-3   max-md:text-[16px] cursor-pointer font-bold " >  
                                {fistLater[0]}
                        </div>
        
                        {
                            isOpen&&(
                                <div onMouseEnter={openDropdown} onMouseLeave={closeDropdown} id="dropdown" className="z-50  -translate-x-[50%] -translate-y-[-24px]  absolute w-[300px]   divide-y divide-gray-100 rounded-lg shadow  bg-kfif">
                                    <div className="relative w-full">
                                        <div className=" absolute rotate-45 h-8 w-8  bg-gradient-to-tl  from-50%  from-transparent to-kfif to-50% top-[-8%]  translate-x-[160px]   max:md:top-[-8%]  "></div>
                                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                    
                                        {
                                            avater.map((ele)=>{
                                                return(
                                                    <li>
                                                        <a href="#" onClick={ele.func}  class="block px-4 py-2 border-t-[0.5px] font-bold  border-slate-100 text-tex dark:hover:bg-lgrn dark:hover:text-white">{ele.name}</a>
                                                    </li>
                                                )
                                            })
                                        }
            
                                        </ul>
                                    </div>
                                </div>
            
                            )
                        }

                </div>
               
            ) :(
                <button type="button"  data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class=" flex items-center justify-center rounded-full  md:ml-[20px] w-[30px] h-[30px]   bg-lgrn text-white dark:text-gray-400rounded-lg text-sm p-2.5 mr-1" >  
                <a href="/auth/login">
                    <i className='fa fa-user'></i>
                </a>
                <span class="sr-only">Favoryt</span>
                </button>

            )
            
        }

        </div>


            <button data-collapse-toggle="navbar-search" onClick={hiddenhad}  type="button" class="inline-flex items-center ml-3 p-2 w-8 h-8 justify-center   text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-grn focus:bg-lgrn dark:text-gray-400  shadow shadow-slate-350 " aria-controls="navbar-search" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
        </div>
            <div className={hidden==false?"items-center justify-between hidden  w-full md:flex md:w-auto md:order-1":"items-center justify-between w-full md:flex md:w-auto md:order-1"} id="navbar-search">
            <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                </div>
                <input type="text" id="search-navbar" class="shadow shadow-slate-300 block w-full p-[10px] pl-10 text-sm text-gray-900 rounded-[20px] bg-kfif" placeholder="Search..."/>            </div>
            <ul class="navb shadow shadow-slate-300 flex flex-col   p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-[20px] md:flex-row md:space-x-8 md:mt-0 md:border-0  max-md:bg-kfif md:shadow-none ">
            
               {
                nac.map((ele)=>{

                    if(ele.name =='Home'){
                        return (
                            <li className=''>
                                <a href={ele.link} class="max-md:my-[3px]   max-md:focus:outline-none max-md:focus:ring-1 max-md:focus:ring-gray-200 max-md:focus:text-white  max-md:focus:bg-grn  font-bold block py-2 pl-3 pr-4 rounded-[30px]  transition-[2s esay-out] text-grn ">{ele.name}</a>
                            </li>
                        )
                    }
                    
                    return (
                        <li className=' transition-all '>
                            <a href={ele.link} class="max-md:my-[3px] max-md:focus:outline-none max-md:focus:ring-1 max-md:focus:ring-gray-200 max-md:focus:text-white max-md:focus:bg-grn  font-bold block py-2 pl-3 pr-4 rounded-[30px]   md:hover:text-grn ">{ele.name}</a>
                        </li>
                    )
                })
               }

            </ul>   
            </div>
        </div>
        </nav>
        <hr className="shadow shadow-gray-400" />

    </section>
  )
}

export default Nav
