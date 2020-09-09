import React, {useState} from 'react';

export function Example(props) {
    const {textService, scope} = props
    const [textContent, setTextContent] = useState("")
    return (
        <div>
            <button onClick={scope.on(async () => setTextContent(await textService()))}>
                Press me
            </button>
            <div>
                {textContent}
            </div>
        </div>
    )
}
