import React, { useState } from "react";
import TitleDash from "../TitleDash";
import axios from "axios";
import AddForm from "./AddForm";

const AddBook = () => {
  const [formdata, setformData] = useState({
    CatogryName: "",
    Emage: "",
  });
  const [message, setmessage] = useState("");
  const books = [
    {
      lable: "Category Tile",
      palce: "category name",
      type: "text",
      name: "CatogryName",
      value: formdata.CatogryName,
    },
    {
      lable: "Category Emage",
      palce: "category emage",
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
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:5000/api/v1/category";
      const sendData = new FormData();
      sendData.append("CatogryName", formdata.CatogryName);
      sendData.append("Emage", formdata.Emage);
      console.log(sendData);

      const res = await axios.post(url, sendData);

      if (res.data.status === "success") {
        window.location.reload();
        setmessage(` ${formdata.CatogryName} Category Created Successfley`);
      } else {
        setmessage(`Filed Create  ${formdata.CatogryName} Category `);
      }
    } catch (err) {
      setmessage(err.message);
    }
  };

  return (
    <>

       <TitleDash title={"Create New Category "} />
       <p>{message}</p>
       <AddForm  inputs={books} handleSubmit={handleSubmit} handleChange={handleChange} checkEmage={formdata.Emage.name}  />
    
    </>
  );
};

export default AddBook;
