import React, {useState} from "react";
// import Box from "./Box";
// import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";


/**
 * BoxList - Displays boxes with adjustable properties.
 *
 * Properties:
 * - boxList: an initial list of objects representing boxes: [{bkgColor, width, height} ...]
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
    const [boxes, setBoxes] = useState(boxList);

    return (
        <div className="BoxList">
            Hello, this is BoxList.
            Boxes received:
            {boxes.map((box) => {
                return <li>Color: {box.bkgColor}, width: {box.width}, height: {box.height}</li>
            })}
        </div>
    );
}


export default BoxList;
