import {act, render} from "@testing-library/react";
import React from "react";
import {Example} from "./Example";
import userEvent from "@testing-library/user-event";
import {waitFor} from "@testing-library/dom";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test('clicking button will show value from async service', async () => {
    const expectedText = "Stop poking me, please"
    const textService = async () => {
        await sleep(10)
        return expectedText
    }

    const {queryAllByText, getByText, queryByText} = render(<Example textService={textService}/>);

    const button = getByText(/Press me/i);
    expect(queryAllByText(expectedText)).toEqual([])

    await act(async () => {
        userEvent.click(button)

        await waitFor(() =>
            expect(queryByText(expectedText)).toBeInTheDocument()
        )
    })
});
