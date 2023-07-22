import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';


/** Dummy box-adding function to pass in to form. Does nothing. */
const addBoxTest = () => {
    return;
};


test("Renders without crashing", () => {
    render(<NewBoxForm addBox={addBoxTest} />);
});


test("Matches snapshot", () => {
    const {asFragment} = render(<NewBoxForm addBox={addBoxTest} />);
    expect(asFragment()).toMatchSnapshot();
});
