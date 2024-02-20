import AMSRpic from './AMSRpic.jpg';
import './App.css';

function About() {
    return (
        <section className="About">
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
      </section>

    );
}

export default About;