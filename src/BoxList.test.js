import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';


test("Renders without crashing", () => {
    render(<BoxList />);
});


test("Matches snapshot for a single box rendered", () => {
    const {asFragment} = render(<BoxList bkgColor="salmon" width={200} height={200} />);
    expect(asFragment).toMatchSnapshot();
});
