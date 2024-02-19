import axios from 'axios';
import React,{useState,useRef} from 'react';





const SignIn = () => {
  
  
  
  const [data, setdata] = useState({
    email:"",
    password:"",
  })

  const inputs=[
  
    {lable:'Email' ,palce:'example@gmail.com',type:'email',name:'email' ,value:data.email},
    {lable:'Password' ,palce:'••••••••',type:'password',name:'password' ,value:data.password},
    ];

  const [error, seterror] = useState("")
  const [isLogined,setisLogined] = useState(false)



  const handleChange = ({currentTarget:input})=>{
   setdata({...data,[input.name]:input.value})
  }

console.log(error)
console.log(data)
  const handleSubmit = async(e)=>{
  e.preventDefault()
  try{
    
    console.log("hello")
    const url = "http://localhost:5000/api/v1/login"
    const response=await axios.post(url,data)
    console.log("done")


    if(response.data.status === "success"){
      localStorage.setItem("token",JSON.stringify(response.data))
      setisLogined(true)  
      window.location="/"
    }else{
      seterror(response.data.message)
    }
      

  }catch(err){
    if (err.response && err.response.status === 401) {
      console.log("Unauthorized - check your credentials");
    } else if (err.response && err.response.status >= 400 && err.response.status <= 500) {
      console.log(err.response.data.message);
      seterror(err.response.data.message);
    } else {
      console.log("Unexpected error:", err.message);
    }
  }
  }


  return (
    <div>
      <section className="bg-gray-50 text-tex ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-3xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center ">
                Sign in to your account
              </h1>
              {
                isLogined == true ?  (
                  <div className="bg-green-300">login seccessfely</div>
                ):""
              }
             
              <form  className="space-y-4 md:space-y-6 pt-8" action="" onSubmit={handleSubmit} method='post'  >

                <div className="bg-red-500">{error}</div>

              {
                  
                  inputs.map((inp)=>{
                    return (
                      <>
  
                      <div>
                        <label htmlFor={inp.lable} className="block mb-2 pl- text-sm font-medium text-[8px] text-tex ">{inp.lable}</label>
                        <input onChange={handleChange}  type={inp.type} name={inp.name} id={inp.name} value={inp.value}  className="boder shadow  border text-gray-700  sm:text-sm rounded-3xl focus:ring-1 outline-none block w-full p-2.5  dark:placeholder-gray-400 font-bold dark:focus:ring-grn dark:focus:border-grn" placeholder={inp.palce} required="" />
                      </div>
                      
                      </>
                    )
                  })
                 }
     
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                  </div>
                  <a href="#" className="text-sm font-medium text-grn hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" className="btn2 w-full text-white bg-grn hover:bg-primary-700  font-medium rounded-3xl text-sm px-5 py-3 text-center  hover:scale-105 transition-all">Sign in</button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet? <a href="register" className="font-medium text-lgrn hover:underline dark:text-primary-500">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;