//React: Library that defines what a component is and how muliple components work together
//ReactDOM: Library that knows how to get a component to show up in the browser

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const el = document.getElementById('root');

 ReactDOM.createRoot(el).render(<App/>);

 
// //code we want to compute in the JSX
// function App(){
//   const name = "Akanksha";
//   const age = 100;
//   //content we want to show in the component
//    return(
//     <h1>
//       Hello friends{name} and my age is {age}
//     </h1>
//    )
//   }


//root.render(<App />);