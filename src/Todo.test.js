import { render } from '@testing-library/react';
import Todo from './Todo';


/** Dummy todo removal function. Does nothing. */
const removeTest = () => {
    return;
}


const testTodo = {
    id: 0,
    text: "Test TODO text",
    remove: removeTest
}


test("Renders without crashing", () => {
    render(<Todo
        id={testTodo.id}
        text={testTodo.text}
        remove={testTodo.remove} />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<Todo
        id={testTodo.id}
        text={testTodo.text}
        remove={testTodo.remove} />);

    expect(asFragment()).toMatchSnapshot();
});
