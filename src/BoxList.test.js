import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';


test("Renders without crashing", () => {
    render(<BoxList />);
});
