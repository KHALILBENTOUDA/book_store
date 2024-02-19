import React,{useEffect,useState,useRef} from 'react'
import phone from '../assets/images/icon-phone.svg'
import email from '../assets/images/icon-email.svg'



const Topline = () => {
  const contact=[
    {type:phone , compt:'+212 09 09 09 09' },
    {type:email , compt:'benkhaliltouda3201@gmail.com' },
  ]
  const media=['facebook','instagram','twitter','github']



  const [scro, setscro] = useState('scrolle')
  const navscrolle = useRef()
    useEffect(() => {
      window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
            setscro('scrolle')
            navscrolle.current.style.position='relative'
            navscrolle.current.style.top='-30px'
        }else{
          navscrolle.current.style.position='relative'
          navscrolle.current.style.top='30px'
        }
      })
    }, [])

  return (
    <>
    <section  className=' bg-black text-Top text-[10px]'>
        <div className=" container myFlex justify-start m-auto relative">
          {
            contact.map((ele)=>{
              return (
                    <div className="  myFlex pr-[5px] ">
                      <img className='w-[14px]' src={ele.type} alt="" />
                      <span className=' p-[10px]'>{ele.compt}</span>
                    </div>
              )
            })
          }

        <ul className='myFlex justify-end absolute right-0 '>
            {
              media.map((ele)=>{
                return (
                  <li className='text-[18px] pl-[20px]'>
                    <i className={`fa-brands fa-${ele}`}></i>
                  </li>
                )
              })
            }
        </ul>
        </div>
    </section>
    </>
  )
}

export default Topline
