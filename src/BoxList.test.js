import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';


const testList = [
    {bkgColor: "salmon", width: 200, height: 200},
    {bkgColor: "blue", width: 500, height: 100},
];

test("Renders without crashing", () => {
    render(<BoxList boxList={testList} />);
});


test("Matches snapshot for a single box rendered", () => {
    const {asFragment} = render(<BoxList boxList={testList} />);
    expect(asFragment).toMatchSnapshot();
});
