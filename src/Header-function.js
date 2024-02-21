import  React ,{useState,useEffect} from 'react';

const HeaderFunction = ({ speed, msg }) => {
    const Typer = ({ speed , mess }) => 
  {
    
    const [idx, setidx] = useState(0);
    useEffect(() => {
      const timer = window.setInterval(() => setidx((v) => v + 1), speed);
      return () => window.clearInterval(timer);
    });
  
    return <div>{mess.substr(0, idx)}</div>;
  };
  return (
    // <div className="intro">
      <Typer speed={speed} mess={msg}></Typer>
    //   <br/>
    //   <Typer speed={speed} mess="Madhu Sudhan Reddy"></Typer>
    //   <br/>
    //   <Typer speed={speed} mess="Software Developer"><span></span></Typer>
    // </div>
   );
  };
  
  export default HeaderFunction;
/*
function HeaderFunction({name}) {
   // let stringValue=name;
    const [placeholder, setPlaceholder] = React.useState(name[0]);
    
    const index = React.useRef(0);
   // const len=name.length;
     console.log(placeholder);
    React.useEffect(() => {
    function tick() {
      index.current++;
      setPlaceholder(prev => prev + name[index.current]);
    }
    if (index.current < name.length-1) {
        console.log(name);
      let addChar = setInterval(tick, 150);
      return () => clearInterval(addChar);
    }
  }, [placeholder]);
  return(
    <div className="intro">
    {placeholder}
        </div >
  );
}

export default HeaderFunction;*/