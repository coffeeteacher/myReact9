import { useEffect, useRef, useState } from 'react';

function App() {

    // 使用useState
    let [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    // 使用useRef
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("App...");
    })


    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            {/* 使用useState */}
            {/* <button onClick={handleClick}>+1</button> */}
            <br />

            {/* 使用useRef */}
            {/* <button onClick={handleClick1}>
                Click me 1!
            </button> */}
            文字方塊1
            <input id='input1' ref={inputRef1} onFocus={handleClick1} />
            <br />

            {/* <button onClick={handleClick2}>
                Click me 2!
            </button> */}
            文字方塊2
            <input id='input2' ref={inputRef2} onFocus={handleClick2} />
            <br />

            {/* <button onClick={handleClick3}>
                Click me 3!
            </button> */}
            文字方塊3
            <input id='input3' ref={inputRef3} onFocus={handleClick3} />
            <br />
        </div>
    );
}
export default App;