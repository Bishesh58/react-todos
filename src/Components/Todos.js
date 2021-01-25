import React from 'react';
import './Todos.css';
import './FormTodo';
import './Todo';
import FormTodo from './FormTodo';
import Todo from './Todo';

function Todos() {
    return (
        <div className="todos">
            <FormTodo />
            <Todo />
        </div>
    )
}

export default Todos
