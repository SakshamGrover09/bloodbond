import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import DonorLogin from './components/Donor/DonorLogin';
import SeekerLogin from './components/Seeker/SeekerLogin';
import AdminLogin from './components/Admin/Adminlogin';
import DonorSignup from "./components/Donor/DonorSignup";
import SeekerSignup from "./components/Seeker/SeekerSignup";
import DonarDashBoard from "./components/Donor/DonarDashBoard";
import SeekerDashboard from "./components/Seeker/SeekerDashboard";
import SeekerProfile from "./components/Seeker/SeekerProfile";
import DonorProfile from "./components/Donor/DonorProfile";
import AdminProfile from "./components/Admin/AdminProfile";
import AdminDashBoard from "./components/Admin/AdminDashBoard";


function App() {
  document.body.style.backgroundImage="url('https://img.freepik.com/free-vector/neutral-soft-abstract-watercolor-background_53876-97742.jpg')"

  

  return (
   
    <div className="App">
    
      
      <BrowserRouter>
        <Navbar />
       
       
        
       <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={<Home/>
              
            }
          ></Route>
          <Route
            exact
            path="/donorlogin"
            element={ <DonorLogin/>
        
            }
          ></Route>
          <Route
            exact
            path="/adminlogin"
            element={ <AdminLogin/>
        
            }
          ></Route>
          <Route
            exact
            path="/seekerlogin"
            element={ <SeekerLogin/>
        
            }
          ></Route>
          <Route
            exact
            path="/donorsignup"
            element={ <DonorSignup/>
        
            }
          ></Route>
          <Route
            exact
            path="/seekersignup"
            element={ <SeekerSignup/>
        
            }
          ></Route>
          <Route
            exact
            path="/donordashboard"
            element={ <DonarDashBoard/>
        
            }></Route>
             <Route
            exact
            path="/seekerdashboard"
            element={ <SeekerDashboard/>
        
            }></Route>
              <Route
            exact
            path="/seekerprofile"
            element={ <SeekerProfile/>
        
            }></Route>
             <Route
            exact
            path="/donorprofile"
            element={ <DonorProfile/>
        
            }></Route>
            <Route
            exact
            path="/admindashboard"
            element={ <AdminDashBoard/>
        
            }></Route>
            <Route
            exact
            path="/adminprofile"
            element={ <AdminProfile/>
        
            }></Route>
            
          
        </Routes>
        </div>
        
      </BrowserRouter>

      
    </div>
  );
}

export default App;
