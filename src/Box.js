import React from "react";
import "./Box.css";


/**
 * Box - render a single box with the given properties.
 *
 * Properties:
 * - id: a unique ID
 * - bkgColor: string representing box color
 * - width: box width in pixels (integer)
 * - height: box height in pixels (integer)
 * - remove(id): removal function passed down by parent component
 */
function Box({id, bkgColor, width, height, remove}) {
    const styles = {
        backgroundColor: bkgColor,
        width: +width,
        height: +height
    };

    /** Remove this box from parent component. */
    const handleRemove = () => {
        remove(id);
    }

    return (
        <div className="Box" data-testid="Box">
            <div className="Box-box" style={styles}>

            </div>
            <button className="Box-remove-btn" onClick={handleRemove}>X</button>
        </div>
    )
}


export default Box;
