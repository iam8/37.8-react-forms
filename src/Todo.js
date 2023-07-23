import React from "react";
import "./Todo.css";


/**
 * Todo - render a single todo item with the given properties.
 *
 * Properties:
 * - id: a unique ID
 * - text (string): the text of the todo task
 * - remove(id): removal function passed down by parent component
 */
function Todo({id, text, remove}) {

    /** Remove this TODO from parent component. */
    const handleRemove = () => {
        remove(id);
    }

    return (
        <div className="Todo" data-testid="Todo">
            <span className="Todo-item">
                {text}
            </span>
            <button className="Todo-remove-btn" onClick={handleRemove}>X</button>
        </div>
    )
}


export default Todo;
