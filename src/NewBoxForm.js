import React, {useState} from "react";


/**
 * NewBoxForm - renders a form that creates a new Box with the submitted width, height, and
 * background color.
 */
function NewBoxForm({addBox}) {
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

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addBox(formData);
        setFormData(INITIAL_FORM);
    };

    return (
        <div className="NewBoxForm">
            <form onSubmit={handleSubmit}>
                <label htmlFor="bkg-color">Background color:</label>
                <input id="bkg-color" name="bkgColor" type="text" onChange={handleChange}/>

                <label htmlFor="width">Width:</label>
                <input id="width" name="width" type="text" onChange={handleChange}/>

                <label htmlFor="height">height:</label>
                <input id="height" name="height" type="text" onChange={handleChange}/>

                <button>Add new box!</button>
            </form>
        </div>
    );
}


export default NewBoxForm;
