import React, { useState, useEffect } from "react";
import "./TodoList.css";
import "./Todo";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

import { todoListState } from "../atoms/todoListState";
import { useRecoilState } from "recoil";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";

function TodoList() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoListState);

  //set storage
  useEffect(() => {
     if(todoList.length){
         localStorage.setItem("todoListStorage", JSON.stringify(todoList));
     }
  }, [todoList])

  //get storage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todoListStorage"));
    if(data){
        setTodoList([...data])
    }
  }, [])


  const addTodo = (e) => {
    e.preventDefault();

    if (!input.trim()) return;
    setTodoList([
      {
        text: input,
        id: uuid(),
        completed: false,
      },
      ...todoList,
    ]);
    setInput("");
  };

  return (
    <div className="todoList">
      <div className="todoList__form">
        <form>
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="What needs to be done?"
          />
          <IconButton
            // disabled={!input.trim()}
            onClick={addTodo}
            type="submit"
          >
            <AddIcon />
          </IconButton>
        </form>
      </div>

      <Todo todoList={todoList} />
    </div>
  );
}

export default TodoList;
