import React from "react";
import ReactDom from "react-dom";


const App:React.FC = () => {
    return <div><h1>test</h1></div>
}

ReactDom.render(<App/>, document.getElementById("root"));
