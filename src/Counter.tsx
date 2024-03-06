
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <>  
        <button onClick={() => setCount(count - 1)}>-</button>
        </>
    )
}

export 