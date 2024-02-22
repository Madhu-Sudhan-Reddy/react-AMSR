import './App.css';
import html5 from './images/Coursera_HTML5.png'; 
import css3 from './images/Coursera_CSS3.png'; 
import cjs from './images/Coursera_JS.png'; 
import responsiveDesign from './images/Coursera_ResponsiveDesign.png'; 
import admin from './images/S_Administrator.png';
import advancedadmin from './images/S_Advanced_Admin.png';
import associate from './images/S_Associate.png';
import pab from './images/S_PlatformAppBuilder.png';
import pd from './images/S_PlatformDeveloper.png';
import ma from './images/Microsoft.png';
import ibmc from './images/IBM_Cloud.png';

function Certifications() {
    return (
        <section className="Certifications">
      <div className="head-word">
      Certifications
        </div>
        <div className="Cert-description">
        <div className="Cert-description-background">
        <h1>Front-End Related Certifications</h1>
            <details classnName="front-end-cert">
            <summary>
              HTML5 | CSS3 | JS | Responsive Design
              <hr/>
              </summary>
         <embed src={html5} className="certifcate"/> 
         <embed src={css3} className="certifcate"/> 
         <embed src={cjs} className="certifcate"/> 
         <embed src={responsiveDesign} className="certifcate"/> 
         </details>
         <h1>Salesforce Related Certifications</h1>
            <details classnName="front-end-cert">
            <summary>
              Platform Developer 1 | Platform App Builder | Associate | Administrator | Advanced Administrator
              <hr/>
              </summary>
         <embed src={pd} className="certifcate"/> 
         <embed src={pab} className="certifcate"/> 
         <embed src={associate} className="certifcate"/> 
         <embed src={admin} className="certifcate"/> 
         <embed src={advancedadmin} className="certifcate"/> 

         </details>
         <h1>Cloud Related Certifications</h1>
            <details classnName="front-end-cert">
            <summary>
              Microsoft Azure | IBM Cloud
              <hr/>
              </summary>
         <embed src={ma} className="certifcate"/> 
         <embed src={ibmc} className="certifcate"/>               
         </details>
        </div>
        </div>
        </section>
    );
}

export default Certifications;