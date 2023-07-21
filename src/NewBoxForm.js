import React, {useState} from "react";


/**
 * NewBoxForm - renders a form that creates a new Box with the submitted width, height, and
 * background color.
 */
function NewBoxForm() {
    const INITIAL_FORM = {
        bkgColor: "",
        width: "",
        height: ""
    };

    const [formData, setFormData] = useState(INITIAL_FORM);

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData((data) => {
            return {
                ...data,
                [name]: value
            };
        });
    };

    return (
        <div className="NewBoxForm">
            <form>
                <label htmlFor="bkg-color">Background color:</label>
                <input id="bkg-color" name="bkgColor" type="text"/>

                <label htmlFor="width">Width:</label>
                <input id="width" name="width" type="text"/>

                <label htmlFor="height">height:</label>
                <input id="height" name="height" type="text"/>

                <button>Add new box!</button>
            </form>
        </div>
    )
}


export default NewBoxForm;
