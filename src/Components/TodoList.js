import React, { useState, useEffect } from "react";
import "./TodoList.css";
import "./Todo";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";
import { todoListState } from "../atoms/todoListState";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import FlipMove from "react-flip-move";
import {
  filteredTodoListState,
  todoListFilterState,
} from "../atoms/todoListFilterState";

function TodoList() {
  const [input, setInput] = useState("");

  // const [todoList, setTodoList] = useRecoilState(todoListState);
  //we need to use useSetRecoil to set the values, cannot use useRecoilState for that
  const todoList = useRecoilValue(filteredTodoListState);
  const setTodoList = useSetRecoilState(todoListState);

  //set storage
  useEffect(() => {
    if (todoList.length) {
      localStorage.setItem("todoListStorage", JSON.stringify(todoList));
    }
  }, [todoList]);

  //get storage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("todoListStorage"));
    if (data) {
      setTodoList([...data]);
    }
  }, []);

  //add new todo
  const addTodo = (e) => {
    e.preventDefault();

    if (!input.trim()) return;
    setTodoList([
      {
        text: capitalizeInput(input),
        id: uuid(),
        completed: false,
      },
      ...todoList,
    ]);
    setInput("");
  };

  //capitalize the first letter
  const capitalizeInput = (str) => {
    if (typeof str !== "string") return "";
    return str[0].toUpperCase() + str.slice(1);
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
      <div className="todoList__todo">
        <FlipMove>
          {todoList.map((todoItem) => (
            <Todo key={todoItem.id} item={todoItem} />
          ))}
        </FlipMove>
      </div>
    </div>
  );
}

export default TodoList;
