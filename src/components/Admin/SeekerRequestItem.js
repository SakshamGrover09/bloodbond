import { useContext } from "react";
import requestContext from "../../context/requests/requestContext";


const SeekerRequestItem = (props) => {
  const context=useContext(requestContext);
  const { srequest } = props;
  const {approveSeekerRequest,rejectSeekerRequest} = context;
  
  return (
    
    <div className="col-md-12 my-2 ">
      <div className="card ccc">
        <div className="card-body">
        <h4 className="card-title pp"><strong>Donor Request</strong></h4>
          <h5 className="card-title pp">Name : {srequest.name}</h5>
          <h5 className="card-title pp">Email : {srequest.email}</h5>
          <h5 className="pp" >Blood Group : {srequest.bloodgroup}</h5>
          <h5 className="pp" >Health Issue : {srequest.healthissue}</h5>
          <h5 className="pp" >Date : {srequest.date}</h5>
          <div className="column">
            <button className="buttonn" onClick={()=>{rejectSeekerRequest(srequest._id)}}>Reject</button>
            <button className="buttonn" onClick={()=>{approveSeekerRequest(srequest._id)}}>Approve</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeekerRequestItem;