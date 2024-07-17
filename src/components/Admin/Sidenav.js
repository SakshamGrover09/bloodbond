import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div  >
        <div className="list-group theme hs" >
                    <Link to="/admindashboard" className="list-group-item list-group-item-action theme text-center text-white">My Dashboard</Link>
                    <Link to="/adminprofile" className="list-group-item list-group-item-action theme text-center text-white">My Profile</Link>
                   
                    <Link to="/verifyprofiles" className="list-group-item list-group-item-action theme text-center text-white">Verify Profiles</Link>
                    
                    <img width="270"  height="300"    className="mg3" src="https://cse.noticebard.com/wp-content/uploads/sites/23/2023/05/NB-Featured-Image-2-1-300x300.jpg" alt="" />
                  </div>
                  <div>
                  
                  </div>
    </div>
  )
}

export default Sidenav