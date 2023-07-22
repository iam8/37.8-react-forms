import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
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
 * - boxes: a list of objects representing boxes: [{id, bkgColor, width, height} ...]
 *
 */
function BoxList({boxList=[]}) {

    // Add UUIDs to each box in boxList before initializing state
    const initBoxes = boxList.map((box) => (
        {
            ...box,
            id: uuid()
        }
    ));

    const [boxes, setBoxes] = useState(initBoxes);

    /** Add new box to box list in state. */
    const addBox = (boxData) => {
        const newBox = {
            id: uuid(),
            bkgColor: boxData.bkgColor,
            width: +boxData.width,
            height: +boxData.height
        }

        setBoxes([...boxes, newBox]);
    };

    /** Remove given box from the box list by its ID. */
    const removeBox = (boxId) => {
        setBoxes(boxes.filter(box => box.id !== boxId));
    };

    return (
        <div className="BoxList">
            <h1 className="BoxList-heading">Boxes Galore</h1>
            <NewBoxForm addBox={addBox} />

            <div className="BoxList-list">
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
        </div>
    );
}


export default BoxList;
