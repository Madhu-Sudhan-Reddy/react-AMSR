import './App.css';
import backgroundPic from './bg1.avif';
import circularPic from './circular.jpg';
import HeaderFunction from './Header-function.js';
import React from 'react';
function Header() {
    const string = 'Hello,';
    const [placeholder, setPlaceholder] = React.useState(string[0]);
      const index = React.useRef(0);
  
    React.useEffect(() => {
      function tick() {
        index.current++;
        setPlaceholder(prev => prev + string[index.current]);
      }
      if (index.current < string.length-1) {
        let addChar = setInterval(tick, 150);
        return () => clearInterval(addChar);
      }
    }, [placeholder]);
    return (
        <header className="App-header">
<img src={backgroundPic} className="App-logo" alt="Background Pic" />
<img className="circular-pic" src={circularPic} alt="Circular Pic"/>
{/* <div className="intro">{headerFunction}
    </div> */}
    {/* <div className="intro">
{placeholder}
    </div > */}
    <div className="hello">
   <HeaderFunction speed={100} msg={"Hello,"} />
   </div>
    <div className="intro">
   <HeaderFunction speed={100} msg={"I am"} />
   </div>
   <div className="intro-name">
   <HeaderFunction speed={150} msg={"Madhu Sudhan Reddy Aileni"} />
   </div>
   <div className="intro-role">
   <HeaderFunction speed={150} msg={"Software Developer"} />
   </div>
   {/* <HeaderFunction name="Madhu Sudhan Reddy" className="intro-name"/> */}
</header>
    );
}

export default Header;





