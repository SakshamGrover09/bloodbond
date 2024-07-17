import React, { useContext, useEffect } from "react";
import Sidenav from "./Sidenav";
import RequestItem from "./RequestItem";
import requestContext from "../../context/requests/requestContext";


const Myrequests = () => {


 
    const context=useContext(requestContext);
    
     
   const{requests,getRequests}=context;
   useEffect(() => {
       getRequests();
   }
    , [])
   
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 sm">
          <Sidenav />
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
          <div>
            <div className="column">
              <h2 className="pp"><strong>My Requests</strong></h2>
              <div className="container mx-1 pp">
                {requests.length === 0 && "No Requests To Display"}
              </div>
              {requests.map((request) => {
                return <RequestItem key={request._id} request={request} />; // show alert
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Myrequests;
