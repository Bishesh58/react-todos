import React from 'react';
import Quotes from './Quotes';
import Todos from './Todos';
import './Taskbar.css';


function Taskbar() {
    return (
        <div className="taskbar">
           <Quotes />
           <Todos />
        </div>
    )
}

export default Taskbar
