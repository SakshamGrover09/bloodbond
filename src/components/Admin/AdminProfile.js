import React, { useContext, useEffect } from 'react'
import Sidenav from './Sidenav'
import { useState } from 'react'
import requestContext from '../../context/requests/requestContext'
import { useNavigate } from 'react-router'

const AdminProfile = () => {
    const context=useContext(requestContext);
    const {updateAdminPassword,profile,getAdminProfile}=context;

    const [credentials,setCredentials]=useState({password:"",cpassword:""});
    let navigate=useNavigate();
    useEffect(() => {
       getAdminProfile();
      
    }, [])
    

  
    

    const onChange=(e)=>{

       setCredentials({...credentials,[e.target.name]:e.target.value});
    
      }
      const handleSubmit=async (e)=>{
      if(credentials.cpassword===credentials.password)
      {

        updateAdminPassword(credentials.password);
        navigate("/admindashboard");
    }
        
    }
    
  return (

    
      
   


<div className="container-fluid">

        <div className="col-md-12">
            <div className="row">
             
                <div className="col-md-3 sm"><Sidenav/></div>
                    
              
                <div className="col-md-6">

                <div className="card ccc mg">
        <div className="card-body">
        <h4 className="card-title pp"><strong>My Profile</strong></h4>
          
           <h5 className="pp" >Name : {profile.name} </h5>
          <h5 className="pp" >Age : {profile.age}</h5>
          <h5 className="pp" >Email : {profile.email}</h5>
          <h5 className="pp" >Mobile : {profile.mobile}</h5>
          <h5 className="pp" >Blood Group : {profile.bloodgroup}</h5> 
          
          
          
        </div>
      </div>
                    </div>
                    
               
                        <div className="col-md-4 border border-imp mg">
                            
                               
                          

                           

                            <h5 className="my-4 text-center pp"><strong>Change Password</strong></h5>
                            <form onSubmit={handleSubmit} >
         
          
    
    <div className="form-group my-2">
      <label className="pp my-2" htmlFor="password"><i class="fa-solid fa-unlock"></i> New Password</label>
      <input type="password" className="form-control my-2 pp" id="password" onChange={onChange} value={credentials.password}  name="password" placeholder="Enter new password...."/>
    </div>
    <div className="form-group my-2">
      <label className="pp my-2" htmlFor="cpassword"><i class="fa-solid fa-unlock"></i> Confirm Password</label>
      <input type="password" className="form-control my-2 pp" id="cpassword" onChange={onChange} value={credentials.cpassword}  name="cpassword" placeholder="Enter confirm password...."/>
    </div>
    
    
    <button type="submit"   className="buttonn my-4 pp mx-6 " >Change Password     </button>
    
  </form>
                          
                            
                             
                                    
                        </div>
                    </div>
                </div>
            </div>
        
      
        
    
  
  
  )
}

export default AdminProfile