import './App.css';
import html5 from './Coursera_HTML5.pdf'; 
import css3 from './Coursera_CSS3.pdf'; 
import cjs from './Coursera_JS.pdf'; 
import admin from './S_Administrator.pdf';
import advancedadmin from './S_Advanced_Admin.pdf';
import associate from './S_Associate.pdf';
import pab from './S_PlatformAppBuilder.pdf';
import pd from './S_PlatformDeveloper.pdf';
import ma from './Microsoft.pdf';
import ibmc from './IBM_Cloud.png';


import responsiveDesign from './Coursera_ResponsiveDesign.pdf'; 
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