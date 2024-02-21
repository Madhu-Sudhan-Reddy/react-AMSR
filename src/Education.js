import './App.css';

function Education() {
    const educationDetails=[["MS (Information Technology) | University of Cincinnati","Cincinnati, OH "," Apr 2024 "," CGPA: 4.0"],
    ["Bachelor of Technology | Malaviya National Institute of Technology","Jaipur, India "," May 2020 "," CGPA: 3.9"]];
    return (
        <section className="Education">
        <div className="head-word">
        Education
          </div>
          <div className="Educ-description">
          <div className="role">
            <h1>{educationDetails[0][0]}</h1>
            <span>{educationDetails[0][1]}</span>
            <span>|</span>
            <span>{educationDetails[0][2]}</span>
            <span>|</span>
            <span>{educationDetails[0][3]}</span>
           </div>
           <div className="role">
            <h1>{educationDetails[1][0]}</h1>
            <span>{educationDetails[1][1]}</span>
            <span>|</span>
            <span>{educationDetails[1][2]}</span>
            <span>|</span>
            <span>{educationDetails[1][3]}</span>
           </div>
          </div>
          </section>
    );
}

export default Education;