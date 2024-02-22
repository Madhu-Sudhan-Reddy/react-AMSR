import './App.css';
import resumeDoc from './resume.pdf';
import linkedIn from './LinkedIn_Logo.png';
import gitHub from './github.png';
import leetCode from './LeetCode.png';

function Resume() {
    return (
    <div>
<section className="Resume">
<div className="head-word">
<a href={resumeDoc} download="Madhu_Sudhan_Reddy_Aileni_Resume">
   <button className="buttonDownload">Resume Download</button>
</a>
  </div>
  </section>
  <section className="Reach-out">
<div className="reachEmail">
      Reach out me at 
  <br/><br/>
  <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=madhusudhanaileni@gmail.com">madhusudhanaileni@gmail.com</a>
  </div>
  </section>
  <section className="Footer-place">
<div className="footer-word">
<div>    
      <a href="https://www.linkedin.com/in/madhusudhan-aileni/" target="_blank" rel="noopener noreferrer"> <img src={linkedIn} alt="LinkedIn logo" className="external-logo"></img></a>

    </div>
    <div>
      <a href="https://github.com/Madhu-Sudhan-Reddy" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="GitHub logo" className="external-logo"></img></a>
    </div>
    <div>
      <a href="https://leetcode.com/MadhuSudhanReddyAIleni/" target="_blank" rel="noopener noreferrer"> <img src={leetCode} alt="LeetCode logo" className="external-logo"></img></a>
    </div>
  </div>
  </section>
  </div>
    );
}

export default Resume;


