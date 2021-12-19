import React from 'react';
import "./Home.css"
const Home = (props) => {
 
    return (
        <div>
           <div className="btn-container">
           <button onClick={props.btnfunction}>Click me Please</button>
           </div>
        </div>
    );
};

export default Home;