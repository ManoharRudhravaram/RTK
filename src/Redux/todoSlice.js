import { createSlice } from '@reduxjs/toolkit';
const initialList = JSON.parse(localStorage.getItem('todoList')) || [];
const todoSlice = createSlice({
    name: "todo",
    initialState: { input: "", list: initialList, toggle: false },
    reducers: {
        setInputvalue: (state, action) => {
            state.input = action.payload;
        },
        addList: (state) => {
            const obj = { id: Math.random(), text: state.input };
            state.list = [...state.list, obj];
            localStorage.setItem("todoList", JSON.stringify(state.list));
            state.input = ""
        },
        deleteList: (state, action) => {
            const updated = state.list.filter(item => item.id !== action.payload);
            state.list = updated;
            localStorage.setItem("todoList", JSON.stringify(state.list));
        },
        editBtn: (state, action) => {
            state.toggle = action.payload;
            const found = state.list.find(e => e.id == action.payload);
            state.input = found.text;
        },
        editList: (state) => {

            const updated = state.list.map((todo) => {
                if (todo.id == state.toggle) {
                    return { ...todo, text: state.input }
                }
                return todo;
            })
            state.list = updated;
            state.input = "";
            state.toggle = false
            localStorage.setItem("todoList", JSON.stringify(state.list));
        }
    }
});

export const { setInputvalue, addList, deleteList, editBtn, editList } = todoSlice.actions;
export default todoSlice.reducer;