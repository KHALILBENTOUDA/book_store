import React, { useEffect, useState } from "react";
import TitleDash from "../TitleDash";
import axios from "axios";
import AddForm from "./AddForm";

const AddBook = () => {
  const [selectCategory, setselectCategory] = useState("")
  const [formdata, setformData] = useState({
    title: "",
    description:"",
    price: "",
    priceAfterDiscount: "",
    quantity: "",
    Emage: "",
   
  });
  const [message, setmessage] = useState("");
  const books = [
    {
      lable: "Book Tile",
      palce: "book name",
      type: "text",
      name: "title",
      value: formdata.title,
    },
    {
      lable: "Price",
      palce: "product price",
      type: "text",
      name: "price",
      value: formdata.price,
    },
    {
      lable: "Price After Discount",
      palce: "new price after discount",
      type: "text",
      name: "priceAfterDiscount",
      value: formdata.priceAfterDiscount,
    },
    {
      lable: "Quantity",
      palce: "quantity",
      type: "text",
      name: "quantity",
      value: formdata.quantity,
    },
    {
      lable: "Book Emage",
      palce: "book emage",
      type: "file",
      name: "Emage",
    },
  ];
  // get data from inputs
  const handleChange = ({ currentTarget: input }) => {
    // to cut only name of the image
    if (input.type === "file") {
      const file = input.files[0];
      if (file) {
        setformData({ ...formdata, [input.name]: file });
       
      }
    } else {
      setformData({ ...formdata, [input.name]: input.value });

      if (input.name === "category") {
        setformData({ ...formdata, category: input.value });
      }
    }
   
  };
  // get categoryes 
  useEffect(() => {
    const select=async()=>{
      const response= await axios.get('http://localhost:5000/api/v1/category')
      .then((res)=>setselectCategory(res.data.data))
    }
    select()
  }, [])

  console.log(selectCategory)
  console.log(formdata)
  // categorySelct={}

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/v1/book";
      const sendData = new FormData();
      sendData.append("title", formdata.title);
      sendData.append("description", formdata.description);
      sendData.append("price", formdata.price);
      sendData.append("priceAfterDiscount", formdata.priceAfterDiscount);
      sendData.append("quantity", formdata.quantity);
      sendData.append("Emage", formdata.Emage);
      sendData.append("category", formdata.category);

      console.log(sendData);
      

      const res = await axios.post(url, sendData);

      if (res.data.status === "success") {
        window.location.reload();
        setmessage(` ${formdata.title} Book Created Successfley`);
        
      } else {
        setmessage(`Filed Create  ${formdata.title} Book `);
      }
    } catch (err) {
      setmessage(err.message);
    }
  };

  return (
    <>

       <TitleDash title={"Create New Book "} ActionButtonCreate="Create New Book" ActionButtonShow={"Show Books "} />
       <p>{message}</p>
       <AddForm  inputs={books} handleSubmit={handleSubmit} handleChange={handleChange} checkEmage={formdata.Emage.name} texteara={true} textearaValue={formdata.description} selectCategory={selectCategory}  />
    
    </>
  );
};

export default AddBook;
