import React from 'react';
import Quotes from './Quotes';
import TodoList from './TodoList';
import './Taskbar.css';


function Taskbar() {
    return (
        <div className="taskbar">
           <Quotes />
           <TodoList />
        </div>
    )
}

export default Taskbar
