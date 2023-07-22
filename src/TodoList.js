import React, {useState} from "react";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";


/**
 * TodoList - renders a list of TODO items and a form that can be used to add a new TODO item to
 * that list.
 *
 * Properties: none
 *
 * State:
 * - todos: a list of objects representing TODO items: [{id, text}, ...]
 */
function TodoList() {
    const [todos, setTodos] = useState([]);

    /** Add new todo to todo list in state. */
    const addTodo = (todoData) => {
        const newTodo = {
            id: uuid(),
            text: todoData.text
        }

        setTodos([...todos, newTodo]);
    }

    /** Remove given todo from the todo list by its ID. */
    const removeTodo = (todoId) => {
        setTodos(todos.filter(todo => todo.id !== todoId));
    };

    return (
        <div className="TodoList">
            <h1 className="TodoList-heading">TODO List</h1>
            <NewTodoForm addTodo={addTodo} />

            <div className="TodoList-list" data-testid="TodoList-list">
                {todos.map((todo) => {
                    return (
                        <div key={todo.id}>
                            <Todo
                                id={todo.id}
                                text={todo.text}
                                remove={removeTodo}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}


export default TodoList;
