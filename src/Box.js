import React from "react";


/**
 * Box - render a single box with the given properties.
 *
 * Properties:
 * - bkgColor: string representing box color
 * - width: box width in pixels (integer)
 * - height: box height in pixels (integer)
 */
function Box({bkgColor, width, height}) {
    const styles = {
        backgroundColor: bkgColor,
        width,
        height
    };

    return (
        <div className="Box" style={styles}>

        </div>
    )
}


export default Box;
