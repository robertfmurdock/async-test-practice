import {act, render} from "@testing-library/react";
import React from "react";
import {Example} from "./Example";
import userEvent from "@testing-library/user-event";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

test('clicking button will show value from async service', async () => {
    await act(async () => {
        const expectedText = "Stop poking me, please"
        const textService = async () => {
            await sleep(10)
            return expectedText
        }

        const exerciseScope = scope()

        const wrapper = render(<Example textService={textService} scope={exerciseScope}/>);

        const {queryAllByText, getByText, queryByText} = wrapper;

        const button = getByText(/Press me/i);
        expect(queryAllByText(expectedText)).toEqual([])

        userEvent.click(button)

        await exerciseScope.all()

        expect(queryByText(expectedText)).toBeInTheDocument()
    })
});

function scope() {
    const scopedPromises = []

    return {
        on(asyncFunc) {
            return () => this.launch(asyncFunc)
        },
        launch(asyncFunc) {
            const promise = asyncFunc();
            scopedPromises.push(promise)
        },
        async all() {
            await Promise.all(scopedPromises)
        }
    }
}
