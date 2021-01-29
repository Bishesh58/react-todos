import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListState } from '../atoms/todoListState';
import './Todo.css';

function Todo() {

     //useRecoilValue --> if we want to use it's state value directly, 
    const todoList = useRecoilValue(todoListState);
    
    return (
        <div className='todo'>
            {todoList.map((item) =>{
              return  <li key={item.id}>{item.text}</li>
            })}
            
        </div>
       
    )
}

export default Todo
