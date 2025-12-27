import React, { useContext, useEffect } from "react";
import Sidenav from "./Sidenav";
import RequestItem from "./DonorRequestItem";
import requestContext from "../../context/requests/requestContext";

const PendingDonorRequests = () => {
  const context = useContext(requestContext);

  const { donorRequests, getDonorRequests } = context;
  useEffect(() => {
    getDonorRequests();
  }, []);

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
                {donorRequests.length === 0 && "No Requests To Display"}
              </div>
              {donorRequests.map((drequest) => {
                return <RequestItem key={drequest._id} drequest={drequest} />; 
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PendingDonorRequests;
