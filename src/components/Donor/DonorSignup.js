import React ,{useState, } from 'react'
import { useNavigate } from 'react-router';

const DonorSignup = (props) => {

  const host="http://localhost:5000";

    let navigate=useNavigate();

    const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:"",gender:"Male",bloodgroup:"A+",mobile:"",age:""});
    

    const onChange=(e)=>{

        setCredentials({...credentials,[e.target.name]:e.target.value});
    
      }
    

    const handleSubmit=async (e)=>{
         e.preventDefault();
         console.log(credentials);

         if(credentials.password!==credentials.cpassword)
         {
           props.showAlert("Passwords do not match","danger")
          
         }else{

         const response = await fetch(`${host}/api/auth/createdonor`, {
             method: "POST",
             body: JSON.stringify({name:credentials.name,email:credentials.email ,password:credentials.password,age:credentials.age,mobile:credentials.mobile,bloodgroup:credentials.bloodgroup,gender:credentials.gender}),
              headers: 
             {
             'Content-Type':'application/json'
             }
           });
           const json=await response.json();
           console.log(json);
           if(json.success)
          {
              localStorage.setItem("token",json.authToken);
              //  props.showAlert("Seeker Account created successfully","success")
               navigate("/donordashboard");

           }else{
              //  props.showAlert("Invalid Credentials","danger")
          }
         }
    }





  return (
    <div className="row mg">
        <h2 className="pp mx-5"><strong>DONOR REGISTRATION / SIGNUP</strong></h2>
      <div className="col-md-1 my-4"></div>
      <div className="col-md-5 border border-imp my-4">
    <form onSubmit={handleSubmit}>
    
         
          <h2 className="pp mx-5 my-3">Sign in to continue....</h2>
    <div className="form-group my-2 ">
  <label  className="pp" htmlFor="name"><i className="fa-solid fa-circle-user"></i>  Name</label>
  <input type="text" className="form-control my-2 pp" onChange={onChange} id="name" value={credentials.name} name="name" required minLength={3} placeholder="Enter name of min length 3..."/>
 
</div>
<div className="form-group">
  <label  className="pp" htmlFor="email"><i className="fa-solid fa-envelope"></i>  Email address</label>
  <input type="email" className="form-control my-2 pp" onChange={onChange} id="email" value={credentials.email} name="email" aria-describedby="emailHelp" placeholder="Enter valid email..."/>
 
</div>
<div className="form-group">
  <label  className="pp" htmlFor="age"><i className="fa-solid fa-users"></i>  Age</label>
  <input type="number" className="form-control my-2 pp" id="age" onChange={onChange} value={credentials.age} required minLength={5} name="age" placeholder="Enter Age..."/>
</div>
<div className="from-group">
    <label className="pp" htmlFor="gender"><i className="fa-solid fa-person-half-dress"></i>  Select Gender </label>
           <select onChange={onChange} name="gender" value={credentials.gender} className="form-control">
              
               <option className="pp" value="Male">Male </option>
               <option className="pp" value="Female">Female </option>
               <option  className="pp"value="Others">Others </option>
            </select>
</div>
<div className="from-group">
    <label className="pp" htmlFor="bloodgroup"><i className="fa-solid fa-droplet"></i>  Select Blood Group </label>
           <select onChange={onChange} name="bloodgroup" value={credentials.bloodgroup} className="form-control">
              
               <option className="pp" value="A+">A+ </option>
               <option className="pp" value="A-">A~ </option>
               <option  className="pp"value="B+">B+ </option>
               <option  className="pp"value="B-">B~ </option>
               <option  className="pp"value="AB+">AB+ </option>
               <option  className="pp"value="AB-">AB~ </option>
               <option  className="pp"value="O+">O+ </option>
               <option  className="pp"value="O-">O~ </option>
            </select>
</div>

<div className="form-group">
  <label  className="pp" htmlFor="mobile"><i className="fa-solid fa-mobile"></i>   Mobile Number</label>
  <input type="text" className="form-control my-2 pp" id="mobile" onChange={onChange} value={credentials.mobile} required minLength={5} name="mobile" placeholder=""/>
</div>
<div className="form-group">
  <label  className="pp" htmlFor="password"><i className="fa-solid fa-unlock"></i>  Password</label>
  <input type="password" className="form-control my-2 pp" id="password" onChange={onChange} value={credentials.password} required minLength={5} name="password" placeholder="Enter password of min length 5..."/>
</div>
<div className="form-group">
  <label  className="pp" htmlFor="cpassword"><i className="fa-solid fa-unlock"></i>  Confirm Password</label>
  <input type="password" className="form-control my-2 pp" id="cpassword" onChange={onChange} value={credentials.cpassword} required minLength={5} name="cpassword" placeholder="Enter Confirm Password..."/>
</div>

<button type="submit" className="buttonn my-3 pp  " >Register </button>
</form>
</div>
<div className="col-md-5 my-4">
      
    <img height="780" width="600" src="https://static.vecteezy.com/system/resources/previews/005/331/892/original/blood-donation-seven-icons-vector.jpg"></img>

  </div>
  </div>

  )
}

export default DonorSignup