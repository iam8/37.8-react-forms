import React from "react";


/**
 * Box - render a single box with the given properties.
 *
 * Properties:
 * - bkgColor: string representing box color
 * - width: box width in pixels (integer)
 * - height: box height in pixels (integer)
 */
function Box({id, bkgColor, width, height, remove}) {
    const styles = {
        backgroundColor: bkgColor,
        width: +width,
        height: +height
    };

    const handleRemove = () => {
        remove(id);
    }

    return (
        <>
        <div className="Box" style={styles}>

        </div>
        <button className="Box-remove-btn" onClick={handleRemove}>X</button>
        </>
    )
}


export default Box;
