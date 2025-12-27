import { useContext } from "react";
import requestContext from "../../context/requests/requestContext";


const DonorRequestItem = (props) => {
  const context=useContext(requestContext);
  const { drequest } = props;
  const {approveDonateRequest,rejectDonateRequest} = context;
  
  return (
    
    <div className="col-md-12 my-2 ">
      <div className="card ccc">
        <div className="card-body">
        <h4 className="card-title pp"><strong>Donor Request</strong></h4>
          <h5 className="card-title pp">Name : {drequest.name}</h5>
          <h5 className="card-title pp">Email : {drequest.email}</h5>
          <h5 className="pp" >Blood Group : {drequest.bloodgroup}</h5>
          <h5 className="pp" >Date : {drequest.date}</h5>
          <div className="column">
            <button className="buttonn" onClick={()=>{rejectDonateRequest(drequest._id)}}>Reject</button>
            <button className="buttonn" onClick={()=>{approveDonateRequest(drequest._id)}}>Approve</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorRequestItem;