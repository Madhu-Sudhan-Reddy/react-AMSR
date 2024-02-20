//import logo from './logo.svg';
//import backgroundPic from './bg1.avif';
import Header from './Header.js';
import About from './About.js';
import Education from './Education.js';
import Certifications from './Certifications.js';
import Professional from './Professional-Experience.js';
import Resume from './Resume.js';
import './App.css';

//import bgPic from './bg.png';

function App() {
  return (
    <div className="App">
       <Header/>
      <About/>
      <Professional/>
      <Education/>
      <Certifications/>
      <Resume/>

      {/* <header className="App-header">
        <img src={backgroundPic} className="App-logo" alt="logo" />
      </header> */}
      {/* <section className="About">
        <div className="head-word">
          About me
        </div>
        <div className="About-description">
       <blockquote className="About-statement">
       "As a master's student in Big Data Analytics, I am passionate about using data to solve complex problems and drive business decisions. With a strong foundation in statistical analysis and machine learning, I am eager to apply my skills as a data scientist or machine learning engineer. My experience has given me a unique perspective on how to leverage data to drive innovation and growth. I am constantly seeking out new challenges and opportunities to grow my skills and make a positive impact through data analytics." 
       </blockquote>
       <div>
        <img src={AMSRpic} className="About-pic" alt="logo" /> 
       </div >
        </div> 
      </section> */}
      {/* <section className="Professional-Experience">
      <div className="head-word">
      Professional Experience
        </div>
        <div className="Prof-description">

        </div>
      </section> */}
      
        {/* <section className="Certifications">
      <div className="head-word">
      Certifications
        </div>
        <div className="Cert-description">

        </div>
        </section> */}
       </div>
  );
}

export default App;
