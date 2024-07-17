import React, { useContext, useEffect, useState } from "react";
import Sidenav from "./Sidenav";

import requestContext from "../../context/requests/requestContext";
import { useNavigate } from "react-router";



const AddRequest = () => {

    let navigate=useNavigate();
    


 
    const context=useContext(requestContext);
    
     
   const{addRequest}=context;
   const[data,setData]=useState({healthissue:""});

   const onChange=(e)=>{

    setData({...data,[e.target.name]:e.target.value});

  }
  

  const handleSubmit=async (e)=>{
   
    addRequest(data.healthissue);
    navigate("/seekerdashboard");
    
}
   
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 sm">
          <Sidenav />
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
        <form className="border border-imp mg" onSubmit={handleSubmit}>
            <div className="pp my-4">
                <h2><strong>Request Blood</strong></h2>

            </div>
  <div className="mb-3 ">
    <label htmlFor="healthissue" className="form-label pp">Enter present health status</label>
    <input type="text" className="form-control my-2 pp" onChange={onChange} id="healthissue" value={data.healthissue} name="healthissue"  placeholder="Enter health status...."/>
    
  </div>
  
  
  <button type="submit" className="buttonn my-3 pp mx-6 ">Submit Request</button>
</form>
        </div>
      </div>
    </div>
  );
};

export default AddRequest;
