import { useRef, useState, useEffect } from 'react';

function App() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>目前值: {inputValue}</h2>
            <h2>前次值: {previousInputValue.current}</h2>
        </>
    );
}
export default App