import {render} from "@testing-library/react";
import React from "react";
import {Example} from "./Example";

test('renders example content', () => {
    const {getByText} = render(<Example/>);
    const linkElement = getByText(/Example/i);
    expect(linkElement).toBeInTheDocument();
});
