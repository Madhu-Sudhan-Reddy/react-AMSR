import './App.css';

function Roles({roleName,company,location,period,matter}) {
    console.log(matter);
    return (
        <div className="role">
            <h1>{roleName}</h1>
            <details>
            <summary>
            <span>{company}</span>
            <span>|</span>
            <span>{location}</span>
            <span>|</span>
            <span>{period}</span>
            <hr/>
            </summary>
           
        <ul>
          { matter.map((item)=>(
            <li key={item}>{item}</li>
          ) )
           }
        </ul>
        </details>

        </div>

        );
    }
    
export default Roles;