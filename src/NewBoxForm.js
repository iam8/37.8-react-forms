import React, {useState} from "react";


/**
 * NewBoxForm - renders a form that creates a new Box with the submitted width, height, and
 * background color.
 *
 * Properties:
 * - addBox: function to add a new Box; received from parent component (BoxList).
 *
 * State:
 * - formData: object with a name: value entry for each form input
 */
function NewBoxForm({addBox}) {
    const INITIAL_FORM = {
        bkgColor: "black",
        width: 100,
        height: 100
    };

    const [formData, setFormData] = useState(INITIAL_FORM);

    /** Update local state with current state of input elements. */
    const handleChange = (evt) => {
        const {name, value} = evt.target;
        setFormData((data) => {
            return {
                ...data,
                [name]: value
            };
        });
    };

    /** Send form data to parent and clear the form. */
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox(formData);
        setFormData(INITIAL_FORM);
    };

    return (
        <div className="NewBoxForm">
            <form onSubmit={handleSubmit}>

                <label htmlFor="bkg-color">Background color:</label>
                <input
                    id="bkg-color"
                    name="bkgColor"
                    value={formData.bkgColor}
                    onChange={handleChange}
                />

                <label htmlFor="width">Width:</label>
                <input
                    id="width"
                    name="width"
                    type="number"
                    value={formData.width}
                    onChange={handleChange}
                />

                <label htmlFor="height">height:</label>
                <input
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                />

                <button>Add new box!</button>
            </form>
        </div>
    );
}


export default NewBoxForm;
