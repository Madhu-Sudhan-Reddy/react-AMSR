import './App.css';
//import {useState} from 'react';
import Roles from './Roles.js';
function Professional() {
  //const [index,setIndex]=useState(0);
  const description=[["Implemented Agile Methodology in application development, incorporating iterative development, weekly sprints, and stand-up meetings for efficient progress tracking.",
    "Leveraged the advanced features of React to craft visually stunning and user-friendly web designs, resulting in a 30% improvement in user engagement metrics.",
    	"Designed and developed multiple application pages using front-end technologies such as HTML5, CSS3, and JSON.",
    "Implemented a Responsive Web Design approach to the site, resulting in a 40% increase in mobile user satisfaction and a 20% decrease in bounce rates.",
    "Utilized JIRA for accurate bug tracking, resolving the issues and ensuring a 95% bug-free application release."
    ],
  ["Designed web-based user interaction screens and highly responsive UI components using React version 16.8, resulting in improved user satisfaction and engagement metrics.",
  	"Demonstrated proficiency in developing Single Page Applications (SPA) utilizing JavaScript MVC frameworks, particularly ReactJS, contributing to a 20% increase in application performance.",
  "Implemented modular architecture using React as a view engine, facilitating the development of scalable and maintainable component-based applications.",
  "Established and managed a Custom Reusable React Components Library, resulting in a 30% decrease in development efforts for similar features across multiple projects.",
  "Applied advanced techniques in React JS components, including Forms, Events, Keys, Router, Redux architecture, and Hooks, leveraging complex Object-Oriented concepts to optimize website performance and user experience.",
  "Implemented Redux middleware such as redux-promise, redux-thunk, and redux-saga to handle asynchronous actions seamlessly, improving application stability and reliability.",
  "Developed comprehensive unit test cases using JEST to validate functionalities, resulting in a 95% test coverage and enhanced overall application quality."
  ],
  ["Designed, developed, and rigorously tested HTML5, CSS3, Bootstrap, JavaScript, ES6, jQuery, and React JS components adhering to accessibility and web browser standards, ensuring seamless website performance.",
    "Managed parent and child elements seamlessly by utilizing State and Props within React.js, ensuring effective component communication and data flow.",
    "Implemented React and Functional Driven JavaScript across Single Page Applications (SPAs), UI Components, and mobile and web interfaces, focusing on performance optimization.",
    "Created various front-end screens using React.js and leveraged predefined components from NPM (Node Package Manager), enhancing development efficiency and consistency.",
    "Achieved significant code optimization by implementing lazy loading and modularizing components such as Login and Validation, Pagination, Upload functionality, and Refresh modules, resulting in a 30% performance boost.",
    "Demonstrated proficiency in leading frameworks like React.js to deliver high-quality, scalable, and reusable components for front-end solutions and worked with cross-functional teams for better result.",
    "Utilized JIRA for careful issue tracking and Confluence for creating and sharing comprehensive documentation, ensuring smooth project workflows and knowledge sharing.",
    "Implemented React container and presentational components, leveraging Stateless and Functional components when applicable, to ensure a clear separation of concerns."
    ]];
  const roles=[["ITS Production Assistant","University of Cincinnati "," Cincinnati OH, USA "," Jan 2023 - Present"],["Software Development Engineer II","IBM "," Hyderabad,TS,IND "," Jan 2022 - Dec 2022"],["Software Development Engineer","IBM "," Hyderabad,TS,IND "," May 2020 - Dec 2021"]];

    return (
        <section className="Professional-Experience">
        <div className="head-word">
        Professional Experience
          </div>
          <div className="Prof-description">
           
      <Roles roleName={roles[0][0]} company={roles[0][1]} location={roles[0][2]} period={roles[0][3]}  matter={description[0]}/>
      <Roles roleName={roles[1][0]} company={roles[1][1]} location={roles[1][2]} period={roles[1][3]} matter={description[1]}/>
      <Roles roleName={roles[2][0]} company={roles[2][1]} location={roles[2][2]} period={roles[2][3]} matter={description[2]}/>
          </div>
        </section>
    );
}

export default Professional;