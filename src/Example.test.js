import {render} from "@testing-library/react";
import React from "react";
import {Example} from "./Example";
import userEvent from "@testing-library/user-event";

test('clicking button will show text', () => {
    const {queryAllByText, getByText, queryByText} = render(<Example/>);
    const button = getByText(/Press me/i);
    expect(queryAllByText(/Stop poking me/i)).toEqual([])
    expect(button).toBeInTheDocument();
    userEvent.click(button)
    expect(queryByText(/Stop poking me/i)).toBeInTheDocument()
});
