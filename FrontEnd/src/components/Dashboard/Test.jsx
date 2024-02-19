import axios from 'axios';
import React,{useState,useRef} from 'react';





const TEST = () => {
  
  
  
  const [data, setdata] = useState({
      CatogryName:"",
      Emage:"",
  })

  const inputs=[
  
    {lable:'Email' ,palce:'',type:'text',name:'CatogryName' ,value:data.CatogryName},
    {lable:'Password' ,palce:'••••••••',type:'file',name:'Emage' ,value:data.Emage},
    ];

  const [error, seterror] = useState("")


  const handleChange = ({currentTarget:input})=>{
      if(input.type === 'file' ){
            const file =input.files[0];
            if(file){
                  setdata({...data,[input.name]:file.na})
            }
      }
   setdata({...data,[input.name]:input.value})
  }

console.log(error)
console.log(data)

  const handleSubmit = async(e)=>{
  e.preventDefault()
  try{
    
    console.log("hello")
    const url = "http://localhost:5000/api/v1/category"
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

             
              <form  className="space-y-4 md:space-y-6 pt-8 w-[500px]" action="" onSubmit={handleSubmit} method='post'  >

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
     

                <button type="submit" className="btn2 w-full text-white bg-grn hover:bg-primary-700  font-medium rounded-3xl text-sm px-5 py-3 text-center  hover:scale-105 transition-all">Sign in</button>
              </form>


      </section>
    </div>
  );
}

export default TEST;