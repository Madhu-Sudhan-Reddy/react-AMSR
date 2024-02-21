import './App.css';
import resumeDoc from './resume.pdf';

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
<div className="reach">
      Reach me at 
  <br/><br/>
  <a href="madhusudhanaileni@gmail.com">madhusudhanaileni@gmail.com</a>
  </div>
  </section>
  <section className="Footer-place">
<div className="footer-word">

  </div>
  </section>
  </div>
    );
}

export default Resume;


