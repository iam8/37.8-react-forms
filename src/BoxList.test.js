import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';


const testList = [
    {bkgColor: "gold", width: 200, height: 200},
    {bkgColor: "blue", width: 500, height: 100},
];


test("Renders without crashing", () => {
    render(<BoxList boxList={testList} />);
});


test("Matches snapshot with no initial boxes rendered", () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});


test("Matches snapshot with initial boxes rendered", () => {
    const {asFragment} = render(<BoxList boxList={testList} />);
    expect(asFragment()).toMatchSnapshot();
});


test("Can add a new box", () => {
    const newBox = {bkgColor: "black", width: 100, height: 100};
    const {
        getByLabelText,
        getByText,
        getByTestId,
        queryAllByTestId
    } = render(<BoxList />);

    expect(getByTestId("BoxList-list")).toBeEmptyDOMElement();
    expect(queryAllByTestId("Box")).toHaveLength(0);

    const colorInput = getByLabelText("Background color:");
    const widthInput = getByLabelText("Width (px):");
    const heightInput = getByLabelText("Height (px):");
    const submitBtn = getByText("Add new box!");

    // Fill out form and submit
    fireEvent.change(colorInput, {target: {value: newBox.bkgColor}});
    fireEvent.change(widthInput, {target: {value: newBox.width}});
    fireEvent.change(heightInput, {target: {value: newBox.height}});
    fireEvent.click(submitBtn);

    expect(getByTestId("BoxList-list")).not.toBeEmptyDOMElement();
    expect(queryAllByTestId("Box")).toHaveLength(1);
});


test("Can remove boxes", () => {
    const {
        queryAllByText,
        getByTestId,
        queryAllByTestId
    } = render(<BoxList boxList={testList}/>);

    expect(getByTestId("BoxList-list")).not.toBeEmptyDOMElement();
    expect(queryAllByTestId("Box")).toHaveLength(2);

    fireEvent.click(queryAllByText("X")[0]);
    fireEvent.click(queryAllByText("X")[0]);

    expect(getByTestId("BoxList-list")).toBeEmptyDOMElement();
    expect(queryAllByTestId("Box")).toHaveLength(0);
});
