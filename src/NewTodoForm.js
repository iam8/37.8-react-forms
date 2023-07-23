import React, {useState} from "react";
import "./NewTodoForm.css";


/**
 * NewTodoForm - renders a form that creates a new Todo item using the submitted text.
 *
 * Properties:
 * - addTodo: function to add a new Todo item; received from parent component (TodoList)
 *
 * State:
 * - formData: object with a name: value entry for each form input
 */
function NewTodoForm({addTodo}) {
    const INITIAL_FORM = {
        text: ""
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
        addTodo(formData);
        setFormData(INITIAL_FORM);
    };

    return (
        <div className="NewTodoForm">
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="item-text">Item text:</label>
                    <input
                        id="item-text"
                        name="text"
                        placeholder="Enter a TODO item"
                        value={formData.text}
                        onChange={handleChange}
                    />
                </div>

                <button className="NewTodoForm-add-btn">Add new TODO item!</button>
            </form>
        </div>
    )
}


export default NewTodoForm;
