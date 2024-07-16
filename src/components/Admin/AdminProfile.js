import React from 'react'
import Sidenav from './Sidenav'

const AdminProfile = () => {
  return (
      
   


<div className="container-fluid">

        <div className="col-md-12">
            <div className="row">
             
                <div className="col-md-3 sm"><Sidenav/></div>
                    
              
                <div className="col-md-10">
                    
               
                    <div className="row">
                        <div className="col-md-6 ">
                           
                              
                                

                                <table className="table table-border-bordered  border border-imp mpp">
                                    <tr>
                                        <th colspan="2" className="text-center pp">My Profile</th>
                                    </tr>
                                    <tr>
                                        <td className="pp">Name</td>
                                        <td></td>
                                    </tr>
                                    
                                    <tr>
                                        <td className="pp">Age</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="pp">Blood Group</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="pp">Email</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="pp">Phone Number</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td className="pp">Gender</td>
                                        <td></td>
                                    </tr>
                                    
                                </table>
                        </div>
                        <div className="col-md-6 border border-imp mg">
                            
                               
                          

                           

                            <h5 className="my-4 text-center pp"><strong>Change Password</strong></h5>
                            <form >
         
          
    <div className="form-group my-3">
      <label className="pp" htmlFor="email"> <i class="fa-solid fa-unlock"></i>   Old Password</label>
      <input type="email" className="form-control my-2 pp"  id="email"  name="email" aria-describedby="emailHelp" placeholder="Enter old password...."/>
     
    </div>
    <div className="form-group my-2">
      <label className="pp" htmlFor="password"><i class="fa-solid fa-unlock"></i> New Password</label>
      <input type="password" className="form-control my-2 pp" id="password"   name="password" placeholder="Enter new password...."/>
    </div>
    <div className="form-group my-2">
      <label className="pp" htmlFor="cpassword"><i class="fa-solid fa-unlock"></i> Confirm Password</label>
      <input type="password" className="form-control my-2 pp" id="cpassword"   name="cpassword" placeholder="Enter new password...."/>
    </div>
    
    
    <button type="submit"   className="buttonn my-3 pp mx-6 " >Login    </button>
    
  </form>
                          
                            
                             
                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div> 
        
    
  
  
  )
}

export default AdminProfile