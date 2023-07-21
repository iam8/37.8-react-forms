import { render, fireEvent } from '@testing-library/react';
import Box from './Box';


const testBox = {
    bkgColor: "salmon",
    width: 200,
    height: 200
}


test("Renders without crashing", () => {
    render(<Box
        bkgColor={testBox.bkgColor}
        width={testBox.width}
        height={testBox.height} />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<Box
        bkgColor={testBox.bkgColor}
        width={testBox.width}
        height={testBox.height} />);

    expect(asFragment).toMatchSnapshot();
});
