import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';


test("Renders without crashing", () => {
    render(<TodoList />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment()).toMatchSnapshot();
});


test("Can add new TODO item", () => {
    const newTodo = {text: "Test TODO item"};
    const {
        getByLabelText,
        getByText,
        getByTestId,
        queryByText
    } = render(<TodoList />);

    expect(getByTestId("TodoList-list")).toBeEmptyDOMElement();
    expect(queryByText("Test TODO item")).not.toBeInTheDocument();

    const textInput = getByLabelText("Item text:");
    const submitBtn = getByText("Add new TODO item!");

    // Fill out form and submit
    fireEvent.change(textInput, {target: {value: newTodo.text}});
    fireEvent.click(submitBtn);

    expect(getByTestId("TodoList-list")).not.toBeEmptyDOMElement();
    expect(queryByText("Test TODO item")).toBeInTheDocument();
});


test("Can remove TODO items", () => {
    const newTodos = [
        {text: "Test TODO 1"},
        {text: "Test TODO 2"}
    ];

    const {
        getByLabelText,
        getByText,
        queryByText,
        queryAllByText
    } = render(<TodoList />);

    const textInput = getByLabelText("Item text:");
    const submitBtn = getByText("Add new TODO item!");

    // Add the new TODOs
    for (let todo of newTodos) {
        fireEvent.change(textInput, {target: {value: todo.text}});
        fireEvent.click(submitBtn);
    }

    expect(queryByText("Test TODO 1")).toBeInTheDocument();
    expect(queryByText("Test TODO 2")).toBeInTheDocument();

    // Remove TODOs
    fireEvent.click(queryAllByText("X")[0]);
    fireEvent.click(queryAllByText("X")[0]);

    expect(queryByText("Test TODO 1")).not.toBeInTheDocument();
    expect(queryByText("Test TODO 2")).not.toBeInTheDocument();
});
