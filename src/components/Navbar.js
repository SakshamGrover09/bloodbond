import React from 'react'
import { Link , useNavigate } from 'react-router-dom'

const Navbar = () => {

  let navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/")
  }
  return (
    <div>
        <nav className="navbar navbar-expand-lg theme navbar-dark">
  <div className="container-fluid">
  <h2 className="themelight"><i className="fa-solid fa-hospital"></i>  BloodBond</h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/"> <i className="fa-solid fa-house"></i>    Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#"><i className="fa-solid fa-notes-medical"></i>  Health Updates</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#"><i className="fa-solid fa-file-lines"></i>    About</a>
        </li>
      
        
      </ul>
      

      {!localStorage.getItem('token')?<form className="d-flex" role="search">
      <Link to="/adminlogin" className="btn btn-outline-light mx-1"  role="button" > <i class="fa-solid fa-user"></i>  Admin Login</Link>
     
     
      </form>:<button onClick={handleLogout} className="btn btn-outline-light mx-1"> <i class="fa-regular fa-user"></i>  Logout</button>}
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar