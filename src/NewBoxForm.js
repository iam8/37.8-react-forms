import React, {useState} from "react";


/**
 * NewBoxForm - renders a form that creates a new Box with the submitted width, height, and
 * background color.
 */
function NewBoxForm() {

    return (
        <div className="NewBoxForm">
            <form>
                <label for="bkg-color">Background color:</label>
                <input id="bkg-color" type="text"/>

                <label for="width">Width:</label>
                <input id="width" type="text"/>

                <label for="height">height:</label>
                <input id="height" type="text"/>

                <button>Add new box!</button>
            </form>
        </div>
    )
}


export default NewBoxForm;
