import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div  >
        <div className="list-group theme hs" >
                    <Link to="/donordashboard" className="list-group-item list-group-item-action theme text-center text-white">My Dashboard</Link>
                    <Link to="/donorprofile" className="list-group-item list-group-item-action theme text-center text-white">My Profile</Link>
                    <Link to="/donor/donateblood" className="list-group-item list-group-item-action theme text-center text-white">Donate Blood</Link>
         
                   
                    <img width="270"  height="350"    className="mg3" src="https://cse.noticebard.com/wp-content/uploads/sites/23/2023/05/NB-Featured-Image-2-1-300x300.jpg" alt="" />
                  </div>
                  <div>
                  
                  </div>
    </div>
  )
}

export default Sidenav