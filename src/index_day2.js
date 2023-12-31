//Component:
//Part of the user interface and it is core building block of the React.
//An application comprises of muliple small components.
//Small components combined together and form the entire UI.
//Components can be nested inside one another.
//Components code are placed in the Javascript
//Example: app.js is the which is the component we will called as app component.
//There are two types of components we have
//1) Functional Component
//2) Class component
//1) Functional Component:
//Functional component is a Javascript function that accepts input called Props(properties) 
//and returns HTML which describes the UI.

function Welcome(props){
return <h1>Hi hello {props.name}</h1>
}
//This function is a valid react functional component becuase its accepts a single prop and returns a react element.
//2) class component
//A class component is nothing but reqular class that extend from the react's component class
//Class component must contain a render method which retuns HTML code
