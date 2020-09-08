import React, {useState} from 'react';

export function Example() {
    const [enabled, setIsEnabled] = useState(false)

    return <div>
        <button onClick={() => setIsEnabled(true)}>
            Press me
        </button>
        <div>
            {enabled ?
                "Stop poking me"
                : ""
            }
        </div>
    </div>
}
