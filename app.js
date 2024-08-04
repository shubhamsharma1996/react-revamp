const heading = React.createElement('h1',{id:'heading'},"This is the reavamp of React");

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);

console.log(root);
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

