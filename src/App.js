// In this App.js file, i need to create a component:-


import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Hello from "./components/Hello";
import Message from "./components/Message";
import PropHello from "./components/PropHello";
import nykaa1 from "./assets/nykaa1.jpg";
import nykaa2 from "./assets/nykaa2.jpeg";
import jhanvi from "./assets/jhanvi.jpeg";
import eyes from "./assets/eyes.jpeg";
import './App.css';



function App() {
    return (
        <>
            <Navbar />
            <Hello />
            <Message />

            <PropHello
                name="Akku"
                description="My fav app"
                image={nykaa1}
            />
            <PropHello
                name="Dugguu"
                description="Makeup-kit"
                image={nykaa2}
            />
            <PropHello
                name="Pratyuu"
                description="jhanvi's brand"
                image={jhanvi}
            />
            <PropHello
                name="Pihuu"
                description="Different shades"
                image={eyes}
            />

        </>

    );
}


export default App;