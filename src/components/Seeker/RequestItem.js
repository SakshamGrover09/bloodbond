import { useContext } from "react";
import requestContext from "../../context/requests/requestContext";


const RequestItem = (props) => {
  const context=useContext(requestContext);
  const {deleteRequest}=context;
  const { request} = props;
  
  return (
    
    <div className="col-md-12 my-2 ">
      <div className="card ccc">
        <div className="card-body">
        <h4 className="card-title pp"><strong>Request</strong></h4>
          
          <h5 className="pp" >Health Issue : {request.healthissue}</h5>
          <h5 className="pp" >Date : {request.date}</h5>
          <i className="fa-solid fa-trash mx-2 pp" onClick={()=>{
            deleteRequest(request._id);
            
          }}></i>
          
        </div>
      </div>
    </div>
  );
};

export default RequestItem;