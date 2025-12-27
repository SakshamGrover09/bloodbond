import React, { useContext, useEffect } from "react";
import Sidenav from "./Sidenav";
import { useState } from "react";
import requestContext from "../../context/requests/requestContext";
import { useNavigate } from "react-router";

const DonateBlood = () => {
  const context = useContext(requestContext);
  const { donateBlood } = context;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    donateBlood();
    navigate("/donordashboard");
  };

  return (
    <div className="container-fluid">
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-3 sm">
            <Sidenav />
          </div>
          <div className="col-md-4"></div>

          <div className="col-md-3 border border-imp mg">
            <h5 className="my-4 text-center pp">
              <strong>Donate Blood</strong>
            </h5>
            <div>
              <h4 className="my-4 text-center pp">
                Thank you for donating blood. Your kindness and generosity help
                save lives and bring hope to those in need.Your small act of
                kindness creates a big impact and truly saves lives.
              </h4>
            </div>
            <div>
              <button className="buttonn" onClick={handleSubmit}>
                Send Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateBlood;
