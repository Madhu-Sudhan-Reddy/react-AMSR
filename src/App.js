//import logo from './logo.svg';
import logo from './bg.png';
import AMSRpic from './AMSRpic.jpg';
import './App.css';
//import bgPic from './bg.png';

function App() {
  return (
    <div className="App">
       <div className="App-header-area">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
       
      </header>
      <section className="About">
        <div className="head-word">
          About me
        </div>
        <div className="About-decription">
       <div class="About-statement">
       "As a master's student in Big Data Analytics, I am passionate about using data to solve complex problems and drive business decisions. With a strong foundation in statistical analysis and machine learning, I am eager to apply my skills as a data scientist or machine learning engineer. My experience has given me a unique perspective on how to leverage data to drive innovation and growth. I am constantly seeking out new challenges and opportunities to grow my skills and make a positive impact through data analytics." 
       </div>
       <div class="About-pic">
       {/* <img src={AMSRpic} className="" alt="logo" /> */}
       </div>
        </div>

        
      </section>
      <section className="Professional Experience">
      <div className="head-word">
      Professional Experience
        </div>
      </section>
      </div>
      
      {/* <section>

      </section>
      <aside>

      </aside>
      <footer>

      </footer> */}
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
