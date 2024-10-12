import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addList, deleteList, editBtn, editList, setInputvalue } from './Redux/todoSlice'
import "../src/App.css"
export default function Todo() {
    const dispatch = useDispatch();
    const { input, list, toggle } = useSelector((data) => {
        return data.todo;
    })

    function changeHandler(e) {
        dispatch(setInputvalue(e.target.value))
    }
    function submitHandler() {
       if(!input) return 
       dispatch(addList())
    }
    function deleteHandler(id) {
        dispatch(deleteList(id))
    }
    function editSubmitHandler() {
        dispatch(editList())
    }
    function editHandler(id) {
        dispatch(editBtn(id))
    }
    return (
        <div>
            <input type="text" onChange={changeHandler} value={input} />
            {!toggle ? <button onClick={submitHandler} className='add'>Add</button> : <button onClick={editSubmitHandler} className='edit'>edit</button>}
            {
                list.length > 0 && list.map((todo) => {
                    return <div key={todo.id} className='todo'>
                        <h4>{todo.text}</h4>
                        <button onClick={() => deleteHandler(todo.id)}>del</button>
                        <button onClick={() => editHandler(todo.id)}>edit</button>
                    </div>
                })
            }
        </div>
    )
}
