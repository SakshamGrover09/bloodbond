import React, { useContext, useEffect } from "react";
import Sidenav from "./Sidenav";
import RequestItem from "./RequestItem";
import requestContext from "../../context/requests/requestContext";

const VerifyProfiles = () => {

    const context=useContext(requestContext);
    
     
    const{drequests,getAllRequests}=context;
    useEffect(() => {
        getAllRequests();
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
              <h2 className="pp"><strong>Active Requests</strong></h2>
              <div className="container mx-1 pp">
                {drequests.length === 0 && "No Requests To Display"}
              </div>
              {drequests.map((drequest) => {
                return <RequestItem key={drequest._id} drequest={drequest} />; // show alert
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  
}

export default VerifyProfiles