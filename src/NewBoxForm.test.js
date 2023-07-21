import { render, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';


test("Renders without crashing", () => {
    render(<NewBoxForm />);
});
