import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import "./BoxList.css";


let currId = 2;

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
function BoxList({boxList=[]}) {
    const [boxes, setBoxes] = useState(boxList);

    /** Add new box to box list. */
    const addBox = (boxData) => {
        const newBox = {
            id: currId,
            bkgColor: boxData.bkgColor,
            width: +boxData.width,
            height: +boxData.height
        }

        setBoxes([...boxes, newBox]);
        currId++;
    };

    /** Remove given box from the box list. */
    const removeBox = (boxId) => {
        setBoxes(boxes.filter(box => box.id !== boxId));
    };

    return (
        <div className="BoxList">
            <h1>Boxes Galore</h1>
            <NewBoxForm addBox={addBox} />

            {boxes.map((box) => {
                return (
                    <div key={box.id}>
                        <Box
                            id={box.id}
                            bkgColor={box.bkgColor}
                            width={box.width}
                            height={box.height}
                            remove={removeBox}
                        />
                    </div>
                )
            })}
        </div>
    );
}


export default BoxList;
