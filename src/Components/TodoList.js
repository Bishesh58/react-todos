import React, { useState } from 'react';
import './TodoList.css';
import './Todo';
import Todo from './Todo';
import { useRecoilValue } from 'recoil';
import { todosState } from '../atoms/todosState';

function TodoList() {

    const [input, setInput] = useState('');

    const addTodo =(e)=>{
        e.preventDefault();

        setInput("");
    }
   
    return (
        <div className="todoList">
            <div className="todoList__form">
                <form>
                    <input 
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    type="text"
                    placeholder="Enter your task"
                    />
                    <button
                    onClick={addTodo}
                    >Add</button>
                </form>
        </div>
            <Todo />
        </div>
    )
}

export default TodoList
