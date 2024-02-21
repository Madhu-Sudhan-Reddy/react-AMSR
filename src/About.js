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
"As a Master's student in Information Technology from the University of Cincinnati, I possess a strong academic foundation coupled with practical expertise. 
Proficient in programming languages including Java and JavaScript, as well as technologies such as React JS and Node JS, I have demonstrated my capabilities through roles at both the University of Cincinnati and IBM. 
At the University of Cincinnati, I spearheaded the implementation of Agile Methodology, resulting in enhanced development efficiency and improved user engagement metrics. 
During my tenure at IBM, I excelled in designing and developing highly responsive UI components, implementing modular architecture, and optimizing website performance through advanced React JS techniques. 
My adeptness in utilizing tools such as JIRA and Confluence for meticulous issue tracking and comprehensive documentation underscores my commitment to delivering high-quality solutions.
"      
 </blockquote>
       <div>
        <img src={AMSRpic} className="About-pic" alt="logo" /> 
       </div >
        </div> 
      </section>

    );
}

export default About;