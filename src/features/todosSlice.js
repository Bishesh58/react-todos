import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: todos,
    initialState: [],
    reducers: {
        addTodo: (state, action) =>{
            state.todo = action.payload;
        },

        deleteTodo: (state, action) =>{
            state.todo = action.payload;
        }

    }

})

export const { addTodo, deleteTodo } = todoSlice.actions;

export const selectTodos = state => state.todos.todos;