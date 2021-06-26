import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

import Minesweeper from "./Minesweeper"

class App extends React.Component {
    mineSweeper: Minesweeper
    constructor({ }) {
        super({})
        this.mineSweeper = new Minesweeper(10, 5)
    }
    render() {
        return (
            <div className="bg-red">{this.mineSweeper.board.map((v, i) => {
                return (<div className="flex flex-row" key={i}>{v.map((v, i) => {
                    return (<div key={i} className={(v ? "bg-black" : "bg-white") + " p-5"}>{v}</div>)
                })}</div>)
            })}</div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById("app"));