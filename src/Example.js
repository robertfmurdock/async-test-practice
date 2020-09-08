import React, {useState} from 'react';

export function Example(props) {
    const {textService} = props
    const [textContent, setTextContent] = useState("")

    return <div>
        <button
            onClick={async() => setTextContent(
                await textService()
            )}>
            Press me
        </button>
        <div>
            {textContent}
        </div>
    </div>
}
