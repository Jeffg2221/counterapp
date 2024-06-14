import React, {useState} from 'react'

/**
 * Counter component.
 * 
 * @returns The Counter component.
 */
const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)} disabled={count === 0}>Decrement</button>
        </div>
    );
}

export default Counter