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
    const {asFragment} = render(<BoxList boxList={testList}/>);
    expect(asFragment()).toMatchSnapshot();
});


test("Can add a new box", () => {
    const newBox = {bkgColor: "black", width: 100, height: 100};
    const {getByLabelText, getByText, getByTestId, queryAllByTestId} = render(<BoxList />);

    const boxList = getByTestId("BoxList-list");
    expect(boxList).toBeEmptyDOMElement();

    const colorInput = getByLabelText("Background color:");
    const widthInput = getByLabelText("Width (px):");
    const heightInput = getByLabelText("Height (px):");
    const submitBtn = getByText("Add new box!");

    // Fill out form and submit
    fireEvent.change(colorInput, {target: {value: newBox.bkgColor}});
    fireEvent.change(widthInput, {target: {value: newBox.width}});
    fireEvent.change(heightInput, {target: {value: newBox.height}});
    fireEvent.click(submitBtn);

    const boxes = queryAllByTestId("Box");
    expect(boxList).not.toBeEmptyDOMElement();
    expect(boxes).toHaveLength(1);
});


test("Can remove a box", () => {
    const {asFragment} = render(<BoxList boxList={testList}/>);
});
