import React from 'react'                     //rafce shortcut


const About = () => {      
                                                
  return (
    <div>
      <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button ccc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong> What is BloodBond ?</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body ccc">
      <strong>Blood Bond</strong> is a dedicated website for <strong>online blood requests at Indian Institute of Information Technology Allahabad - IIITA</strong>, built using the <strong>MERN</strong> stack (MongoDB, Express.js, React.js, and Node.js). It facilitates efficient communication between blood donors and seekers within the IIITA community, ensuring quick and reliable blood donations. The platform supports user authentication, profile verification by admin, password change facility, and real-time updates, along with providing the latest health news through an API.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed ccc" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <strong>What is MERN stack?</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body ccc ">
       <strong>MERN stack</strong> is a popular web development framework comprising <strong>MongoDB, Express.js, React.js, and Node.js</strong>. It enables developers to build full-stack applications with a single language, JavaScript. MongoDB serves as the database, Express.js as the backend framework, React.js for the frontend, and Node.js for server-side execution.
      </div>
    </div>
  </div>
  
</div>
       </div>
  )
}

export default About