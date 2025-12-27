import React, { useContext, useEffect } from "react";
import Sidenav from "./Sidenav";
import RequestItem from "./SeekerRequestItem";
import requestContext from "../../context/requests/requestContext";

const PendingSeekerRequests = () => {
  const context = useContext(requestContext);

     const{seekerRequests,getSeekerRequests}=context;
     useEffect(() => {
         getSeekerRequests();
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
              <h2 className="pp">
                <strong>Pending Requests</strong>
              </h2>
              <div className="container mx-1 pp">
                {seekerRequests.length === 0 && "No Requests To Display"}
              </div>
              {seekerRequests.map((srequest) => {
                return <RequestItem key={srequest._id} srequest={srequest} />; // show alert
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingSeekerRequests;
