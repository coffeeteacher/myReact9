import { useRef } from 'react';

function App() {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>取得游標</button>
        </>
    );
}
export default App