import React, { useContext, useState } from "react";
import Sidenav from "./Sidenav";

import requestContext from "../../context/requests/requestContext";
import { useNavigate } from "react-router";

const RequestBlood = () => {
  let navigate = useNavigate();
  const context = useContext(requestContext);

  const { requestBlood } = context;
  const [data, setData] = useState({ healthissue: "" });

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    const res = await requestBlood(data.healthissue);
    if (res === 0) {
      navigate("/seekerdashboard");
      alert("Sorry!! Blood Stock not available.");
    }
    navigate("/seekerdashboard");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 sm">
          <Sidenav />
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-6 ">
            <div className="pp my-4">
              <h2>
                <strong>Request Blood</strong>
              </h2>
            </div>
            <div className="mb-3 ">
              <label htmlFor="healthissue" className="form-label pp">
                Enter present health status
              </label>
              <input
                type="text"
                className="form-control my-2 pp"
                onChange={onChange}
                id="healthissue"
                value={data.healthissue}
                name="healthissue"
                placeholder="Enter health status...."
              />
            </div>

            <button onClick={handleSubmit} className="buttonn my-3 pp mx-6 ">
              Submit Request
            </button>
        </div>
      </div>
    </div>
  );
};

export default RequestBlood;
