import { useState } from "react"

const CreateForm = ({ addTodo }) => {
    // console.log(addTodo)
    const [content, setContent] = useState('');

    return (
        <form className='create-form'>
            <input
                id="myInput"
                type="text"
                placeholder='輸入待辦事項'
                value={content}
                onChange={(e) => { setContent(e.target.value) }}
            />
            <button type="button" onClick={() => {
                addTodo(content);
                setContent('');
                let myInput = document.getElementById('myInput');
                myInput.focus();    // 指定游標
            }}>加入</button>
        </form>
    )
}

export default CreateForm