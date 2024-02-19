import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";






function Register() {

  const [data, setdata] = useState({
    UserName:"",
    email:"",
    password:"",
    confirmPassword:""
})

console.log(data)

const [error, seterror] = useState("")

  const inputs=[
  
    {lable:'FirstName' ,palce:'name',type:'text',name:'UserName' ,value:data.UserName},
    {lable:'Email' ,palce:'example@gmail.com',type:'email',name:'email' ,value:data.email},
    {lable:'Password' ,palce:'••••••••',type:'password',name:'password' ,value:data.password},
    {lable:'Confirm password',palce:'••••••••',type:'password',name:'confirmPassword' ,value:data.confirmPassword},
  ];

  const handleChange = (e)=>{
    const {name,value} = e.target
    setdata({...data,[name]:value})
  }
  
  const navigate=useNavigate()

const handleSubmit = async(e)=>{
  e.preventDefault()
  console.log(data)
  try{
    const url = "http://localhost:5000/api/v1/register"
    const {data:res}=await axios.post(url,data)
    navigate("/auth/login")
  }catch(err){
    if(err.response && err.response.status >= 400 && err.response.status<=500){
      seterror(err.response.data.message)
    }
  }
}
  
  
  return (
    <div>
      <section className="bg-gray-50 dark:bg-kfif pt-[130px] text-tex">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2 flex-shrink-0" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-center ">
                Create your account
              </h1>
              <form className="space-y-5 md:space-y-6 pt-5" action="#" onSubmit={handleSubmit} method="post">
               {
                
                inputs.map((inp)=>{
                  return (
                    <>
                    <div>
                      <p className=" bg-red-400">{error}</p>
                      <label htmlFor={inp.lable} className="block mb-2 pl- text-sm font-medium text-[8px] text-tex ">{inp.lable}</label>
                      <input onChange={handleChange} type={inp.type} name={inp.name} id="email" value={inp.value} className="boder shadow  border text-gray-700  sm:text-sm rounded-3xl focus:ring-1 outline-none block w-full p-2.5  dark:placeholder-gray-400 font-bold dark:focus:ring-grn dark:focus:border-grn" placeholder={inp.palce} required="" />
                    </div>
                    
                    </>
                  )
                })
               }
                
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 borde  " required="" />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="terms" className="font-light text-tex text-[11px]">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-grn" href="#">Terms and Conditions</a></label>
                  </div>
                </div>
                <button type="submit" className="btn2 w-full text-white bg-grn hover:bg-primary-700  font-medium rounded-3xl text-sm px-5 py-3 text-center  hover:scale-105 transition-all">Create an account</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account? <a href="login" className="font-medium text-primary-600 hover:underline text-lgrn ">Login here</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
