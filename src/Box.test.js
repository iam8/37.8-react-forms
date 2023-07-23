import { render } from '@testing-library/react';
import Box from './Box';


/** Dummy box removal function. Does nothing. */
const removeTest = () => {
    return;
}


const testBox = {
    id: 0,
    bkgColor: "salmon",
    width: 200,
    height: 200,
    remove: removeTest
};


test("Renders without crashing", () => {
    render(<Box
        id={testBox.id}
        bkgColor={testBox.bkgColor}
        width={testBox.width}
        height={testBox.height}
        remove={testBox.remove} />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<Box
        id={testBox.id}
        bkgColor={testBox.bkgColor}
        width={testBox.width}
        height={testBox.height}
        remove={testBox.remove} />);

    expect(asFragment()).toMatchSnapshot();
});
