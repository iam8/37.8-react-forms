import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";


/**
 * BoxList - renders a row of initial colored boxes on screen, followed by a form that can be used to add a new box with specified properties to the screen.
 *
 * Properties:
 * - boxList: an initial list of objects representing boxes: [{bkgColor, width, height} ...]
 *
 * State:
 * - boxes: a list of objects representing boxes: [{bkgColor, width, height} ...]
 *
 */
function BoxList({boxList}) {
    const [boxes, setBoxes] = useState(boxList);

    return (
        <div className="BoxList">
            <h1>Boxes Galore</h1>

            {
                boxes.map((box) => {
                    return (
                        <>
                        <Box
                            bkgColor={box.bkgColor}
                            width={box.width}
                            height={box.height}
                        />
                        <button>X</button>
                        </>
                    );
                })
            }

            <NewBoxForm />
        </div>
    );
}


export default BoxList;
