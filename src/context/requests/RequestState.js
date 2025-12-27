import React, { useState } from "react";
import requestContext from "./requestContext";

const RequestState = (props) => {
  const host = "http://localhost:5000";

  const donorRequestsInitial = [];
  const seekerRequestsInitial = [];
  const [donorRequests, setDonorRequests] = useState(donorRequestsInitial);
  const [seekerRequests, setSeekerRequests] = useState(seekerRequestsInitial);
  const [profile, setProfile] = useState({});

  const getDonorRequests = async () => {
    const response = await fetch(`${host}/api/requests/donorrequest`, {
      method: "GET",
    });
    const json = await response.json();
    setDonorRequests(json);
  };

  const getSeekerRequests = async () => {
    const response = await fetch(`${host}/api/requests/seekerrequest`, {
      method: "GET",
    });
    const json = await response.json();
    setSeekerRequests(json);
  };

  const donateBlood = async () => {
    const response = await fetch(`${host}/api/requests/donateblood`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setDonorRequests(donorRequests.concat(json));
  };

  const requestBlood = async (healthissue) => {
    const response = await fetch(`${host}/api/requests/requestblood`, {
      method: "POST",
      body: JSON.stringify({ healthissue }),
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    if (json.error != "NOT_AVAILABLE") {
      setSeekerRequests(seekerRequests.concat(json));
      return 1;
    } else {
      return 0;
    }
  };

  const approveSeekerRequest = async (id) => {
    const newrequests = seekerRequests.filter((request) => {
      return request._id !== id;
    });

    setSeekerRequests(newrequests);

    const response = await fetch(
      `${host}/api/requests/approveseekerrequest/${id}`,
      {
        method: "DELETE",
      }
    );
  };

  const rejectSeekerRequest = async (id) => {
    const newrequests = seekerRequests.filter((request) => {
      return request._id !== id;
    });

    setSeekerRequests(newrequests);

    const response = await fetch(
      `${host}/api/requests/rejectseekerrequest/${id}`,
      {
        method: "DELETE",
      }
    );
  };

  const approveDonateRequest = async (id) => {
    const newrequests = donorRequests.filter((request) => {
      return request._id !== id;
    });

    setDonorRequests(newrequests);

    const response = await fetch(
      `${host}/api/requests/approvedonaterequest/${id}`,
      {
        method: "DELETE",
      }
    );
  };

  const rejectDonateRequest = async (id) => {
    const newrequests = donorRequests.filter((request) => {
      return request._id !== id;
    });

    setDonorRequests(newrequests);

    const response = await fetch(
      `${host}/api/requests/rejectdonaterequest/${id}`,
      {
        method: "DELETE",
      }
    );
  };

  const updateAdminPassword = async (password) => {
    const response = await fetch(`${host}/api/auth/updateadminpassword`, {
      method: "PUT",
      body: JSON.stringify({ password }),
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
  };

  const updateDonorPassword = async (password) => {
    const response = await fetch(`${host}/api/auth/updatedonorpassword`, {
      method: "PUT",
      body: JSON.stringify({ password }),
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
  };

  const updateSeekerPassword = async (password) => {
    const response = await fetch(`${host}/api/auth/updateseekerpassword`, {
      method: "PUT",
      body: JSON.stringify({ password }),
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
  };

  const getSeekerProfile = async () => {
    const response = await fetch(`${host}/api/auth/getseeker`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const tt = await response.json();
    setProfile(tt);

    console.log(profile);
  };

  const getDonorProfile = async () => {
    const response = await fetch(`${host}/api/auth/getdonor`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const tt = await response.json();
    setProfile(tt);
  };

  const getAdminProfile = async () => {
    const response = await fetch(`${host}/api/auth/getadmin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });
    const tt = await response.json();
    setProfile(tt);
  };

  return (
    <requestContext.Provider
      value={{
        profile,
        donorRequests,
        seekerRequests,
        donateBlood,
        requestBlood,
        getDonorRequests,
        getSeekerRequests,
        approveDonateRequest,
        approveSeekerRequest,
        rejectDonateRequest,
        rejectSeekerRequest,
        updateAdminPassword,
        updateDonorPassword,
        updateSeekerPassword,
        getSeekerProfile,
        getDonorProfile,
        getAdminProfile,
      }}
    >
      {props.children}
    </requestContext.Provider>
  );
};

export default RequestState;
