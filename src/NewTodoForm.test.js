import { render } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';


/** Dummy todo-adding function to pass in to form. Does nothing. */
const addTodoTest = () => {
    return;
};


test("Renders without crashing", () => {
    render(<NewTodoForm addTodo={addTodoTest} />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<NewTodoForm addTodo={addTodoTest} />);
    expect(asFragment()).toMatchSnapshot();
});
