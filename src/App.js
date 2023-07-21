/**
 * Top-level application component.
 *
 * Renders components for color box maker and todo list.
 */

import React from "react";
import { v4 as uuid } from 'uuid';
import BoxList from "./BoxList";
import "./App.css";


function App() {
    return (
        <div className="App">
            <BoxList boxList={[
                {id: uuid(), bkgColor: "salmon", width: 200, height: 200},
                {id: uuid(), bkgColor: "red", width: 100, height: 400},
            ]} />
        </div>
    );
}

export default App;
