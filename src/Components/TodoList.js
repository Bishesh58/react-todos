import React, { useState } from 'react';
import './TodoList.css';
import './Todo';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';

import { todoListState } from '../atoms/todoListState';
import { useRecoilState } from 'recoil';

function TodoList() {

    const [input, setInput] = useState('');
    const [todoList, setTodoList] = useRecoilState(todoListState)

    const addTodo =(e)=>{
        e.preventDefault();
        if(!input.trim()) return;
        setTodoList([{
            text: input,
            id: uuid(),
            completed: false,
        }, ...todoList])
        setInput("");
    }
   
    return (
        <div className="todoList">
            <div className="todoList__form">
                <form>
                    <input
                    autoFocus 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    type="text"
                    placeholder="Enter your task"
                    />
                    <button
                    // disabled={!input.trim()}
                    onClick={addTodo}
                    >Add</button>
                </form>
        </div>

        <Todo />
        </div>
    )
}

export default TodoList
