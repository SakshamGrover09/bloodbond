import { useContext } from "react";
import requestContext from "../../context/requests/requestContext";


const RequestItem = (props) => {
  const context=useContext(requestContext);
  const { drequest } = props;
  
  return (
    
    <div className="col-md-12 my-2 ">
      <div className="card ccc">
        <div className="card-body">
        <h4 className="card-title pp"><strong>Request</strong></h4>
          <h5 className="card-title pp">Name : {drequest.name}</h5>
          <h5 className="card-title pp">Age : {drequest.age}</h5>
          <h5 className="card-title pp">Gender : {drequest.gender}</h5>
          <h5 className="card-title pp">Email : {drequest.email}</h5>
          <h5 className="card-title pp">Mobile Number : {drequest.mobile}</h5>
          <h5 className="pp" >Blood Group : {drequest.bloodgroup}</h5>
          <h5 className="pp" >Health Issue : {drequest.healthissue}</h5>
          
        </div>
      </div>
    </div>
  );
};

export default RequestItem;