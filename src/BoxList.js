/**
 * BoxList - Displays a box with adjustable properties.
 *
 * Properties:
 * - bkgColor: string representing box color
 * - width: box width in pixels (integer)
 * - height: box height in pixels (integer)
 */

import React from "react";
// import Box from "./Box";
// import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";


function BoxList({bkgColor, width, height}) {


    return (
        <div className="BoxList">
            Hello, this is BoxList.
            Properties received: {bkgColor}, {width}px, {height}px.
        </div>
    );
}


export default BoxList;
