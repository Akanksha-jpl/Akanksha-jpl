import React from 'react';
import ReactDOM from 'react-dom/client';


const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);
//code we want to compute in the JSX
function App(){
    return <input className='' style = {{border: '1px solid green'}} type = "number" min = {5} max = {10}/>
     

       

}
root.render(<App />);
//   const name = "Akanksha";
//   const age = 100;
//   //content we want to show in the component
//    return(
//     <h1>
//       Hello friends{name} and my age is {age}
//     </h1>
//    )
//   }


// root.render(<App />);