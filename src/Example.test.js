import {act, render} from "@testing-library/react";
import React from "react";
import {Example} from "./Example";
import userEvent from "@testing-library/user-event";

test('clicking button will show value from async service', async () => {
    await act(async () => {
        const expectedText = "Stop poking me, please"
        const textService = async () => expectedText

        const {queryAllByText, getByText, queryByText} = render(<Example textService={textService}/>);

        const button = getByText(/Press me/i);
        expect(queryAllByText(expectedText)).toEqual([])

        userEvent.click(button)

        expect(queryByText(expectedText)).toBeInTheDocument()
    });
});
