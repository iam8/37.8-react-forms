import React from "react";
// import Box from "./Box";
// import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";


/**
 * BoxList - Displays a box with adjustable properties.
 *
 * Properties:
 * - boxList: a list of objects representing boxes: [{bkgColor, width, height} ...]
 *
 * State:
 * - boxes: a list of objects representing boxes: [{bkgColor, width, height} ...]
 *
 * Props of individual boxes:
 * - bkgColor: string representing box color
 * - width: box width in pixels (integer)
 * - height: box height in pixels (integer)
 */
function BoxList({boxList}) {


    return (
        <div className="BoxList">
            Hello, this is BoxList.
            Boxes received:
            {boxList.map((box) => {
                return <li>Color: {box.bkgColor}, width: {box.width}, height: {box.height}</li>
            })}
        </div>
    );
}


export default BoxList;
