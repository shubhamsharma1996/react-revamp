import React from "react";
import ReactDOM from "react-dom";

// React.createElement => ReactElement JS Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is the reavamp of React"
);

// jsx is not html inside the Javascript, it is kind of linke html
// JSX => React.createElement => ReactElement JS Object => HTMLElement
// Bable transpile before it raches the JS engine

const jsxHeading = <h1 id="heading">Hi My name is shubham</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);

/**
 * ReactElement(Object) => HTML(Browser understand)
 */

// using js
/**
 * 
    const heading = document.createElement("h1");
    heading.textContent = "Hello to the new beginning of the preparation";
    const rootElement = document.getElementById("root");
    rootElement.appendChild(heading);
 * 
 */
