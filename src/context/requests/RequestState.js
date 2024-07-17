import React, { useState } from "react";
import requestContext from "./requestContext";


const RequestState=(props)=>{

  const host="http://localhost:5000";

    const requestInitial=[];
    const requestdInitial=[];
      const [requests,setRequests]=useState(requestInitial);
      const [drequests,setDrequests]=useState(requestdInitial);
      const [profile,setProfile]=useState({});
      const getRequests=async ()=>{

        const response = await fetch(`${host}/api/requests/fetchmyrequests`, {
          method: "GET",
          headers: 
          {
          'Content-Type':'application/json',
          'auth-token': localStorage.getItem("token")
          }
          
        });
        const tt= await response.json();
        setRequests(tt);
    }


        const getAllRequests=async ()=>{

            const response = await fetch(`${host}/api/requests/fetchallrequests`, {
              method: "GET",
              headers: 
              {
              'Content-Type':'application/json',
              'auth-token': localStorage.getItem("token")
              }
            });

        const json=await response.json();
        setDrequests(json);
      }


      const addRequest=async (healthissue)=>{

        const response = await fetch(`${host}/api/requests/addrequest`, {
          method: "POST",
          body: JSON.stringify({healthissue}),
          headers: 
          {
          'Content-Type':'application/json',
          'auth-token':  localStorage.getItem("token")
          }
        });

        const json = await response.json();
        setRequests(requests.concat(json));
        
      }


      const deleteRequest= async (id)=>{

        const newrequests=requests.filter((request)=>{

         return request._id!==id;
        })

        setRequests(newrequests);
        const response = await fetch(`${host}/api/requests/deleterequest/${id}`, {
          method: "DELETE",
          headers: 
          {
          'Content-Type':'application/json',
          'auth-token': localStorage.getItem("token")
          }
        });
      }


      const updateAdminPassword= async (password)=>{

        const response = await fetch(`${host}/api/auth/updateadminpassword`, {
        method: "PUT",
        body: JSON.stringify({password}),
        headers: 
        {
        'Content-Type':'application/json',
        'auth-token':  localStorage.getItem("token")
        }
      });
      }



      const updateDonorPassword= async (password)=>{

        const response = await fetch(`${host}/api/auth/updatedonorpassword`, {
        method: "PUT",
        body: JSON.stringify({password}),
        headers: 
        {
        'Content-Type':'application/json',
        'auth-token':  localStorage.getItem("token")
        }
      });
      }


      const updateSeekerPassword= async (password)=>{

        const response = await fetch(`${host}/api/auth/updateseekerpassword`, {
        method: "PUT",
        body: JSON.stringify({password}),
        headers: 
        {
        'Content-Type':'application/json',
        'auth-token':  localStorage.getItem("token")
        }
      });

      }

      const getSeekerProfile=async ()=>{

        const response = await fetch(`${host}/api/auth/getseeker`, {
          method: "POST",
          headers: 
          {
          'Content-Type':'application/json',
          'auth-token': localStorage.getItem("token")
          }
          
        });
        const tt= await response.json();
        setProfile(tt);
        
    console.log(profile);
    }




    const getDonorProfile=async ()=>{

      const response = await fetch(`${host}/api/auth/getdonor`, {
        method: "POST",
        headers: 
        {
        'Content-Type':'application/json',
        'auth-token': localStorage.getItem("token")
        }
        
      });
      const tt= await response.json();
      setProfile(tt);
  }


  const getAdminProfile=async ()=>{

    const response = await fetch(`${host}/api/auth/getadmin`, {
      method: "POST",
      headers: 
      {
      'Content-Type':'application/json',
      'auth-token': localStorage.getItem("token")
      }
      
    });
    const tt= await response.json();
    setProfile(tt);
    
    
}
   
    
    
    return(
        <requestContext.Provider value={{profile,requests,drequests,getRequests,getAllRequests,addRequest,deleteRequest,updateAdminPassword,updateDonorPassword,updateSeekerPassword,getSeekerProfile,getDonorProfile,getAdminProfile}} >
            { props.children}

        </requestContext.Provider>
    )
}

export default RequestState;