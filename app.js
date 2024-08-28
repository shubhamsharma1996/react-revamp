import React from "react";
import ReactDOM from "react-dom";

const TitleComponent = () =>(
   <h1 className="title"> React Component </h1>
)

const nameElement = (
   <h3>I'm a react developer.</h3>
)

const HeadingComoponent = () =>(
   <div id='container'>
      <TitleComponent />
      <h2 id="heading">Hi My name is shubham and this is a functional component.</h2>
      {nameElement}
   </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComoponent/>);


