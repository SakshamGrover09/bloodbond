import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="container ">
          <div className="row ">
             <div className="col-md-4 border border-imp ">
                 <img className="mg2" width="340" height="320" src="https://st3.depositphotos.com/1001599/19044/v/450/depositphotos_190446480-stock-illustration-doctor-visiting-patient-lying-in.jpg" alt="" />
                   <h5 className="mg2">Saving a life won’t cost you anything. Go ahead and donate blood !!</h5>
                   <div className="d-flex my-4">
                   <Link to="/donorsignup" className="btn btn-danger rounded-4 mx-4"  role="button" > <i class="fa-solid fa-user"></i> Donor Sign Up</Link>
   <Link to="/donorlogin" className="btn btn-danger rounded-4 mx-4"  role="button" > <i class="fa-regular fa-user"></i> Donor Login</Link>
                  

                   </div>
             </div>
             <div className="col-md-4 border border-imp ">
                 <img className="mg2" width="340" height="322" src="https://cse.noticebard.com/wp-content/uploads/sites/23/2023/05/NB-Featured-Image-2-1-300x300.jpg" alt="" />
                <h5 className="mg2"> Blood donation is a simple yet powerful way to save lives and support medical treatments. Each donation can help multiple patients in need, making a profound impact on community health and well-being.</h5>
               
             </div>
             <div className="col-md-4  border border-imp">
                 <img className="mg2" width="340" height="320" src="https://static.vecteezy.com/system/resources/previews/020/308/540/non_2x/blood-donation-2d-isolated-illustration-man-in-chair-on-blood-transfusion-donor-with-smiling-nurse-flat-characters-on-cartoon-background-charity-work-and-volunteering-colourful-scene-vector.jpg" alt="" />
   <h5 className="mg2">Someone, your type, is out there somewhere, needing your blood !!</h5>
   <div className="d-flex my-4">
   <Link to="/seekersignup" className="btn btn-danger rounded-4 mx-4"  role="button" > <i class="fa-solid fa-user"></i> Seeker Sign Up</Link>
   <Link to="/seekerlogin" className="btn btn-danger rounded-4 mx-4"  role="button" > <i class="fa-regular fa-user"></i> Seeker Login</Link>
                  


                   </div>
             </div>


          </div>


      </div>
    </>
  );
};

export default Home;
