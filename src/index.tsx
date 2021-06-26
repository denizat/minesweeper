import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

class App extends React.Component {
    render() {
        return (
            <div className="hover:bg-red-700">Cons</div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"));