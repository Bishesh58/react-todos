import React, { forwardRef } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";
import "./Todo.css";
import IconButton from "@material-ui/core/IconButton";
import { Delete } from "@material-ui/icons";
import Checkbox from "@material-ui/core/Checkbox";

const Todo = forwardRef(({ item }, ref) => {
  const [list, setlist] = useRecoilState(todoListState);
  const index = list.findIndex((listItem) => listItem === item);

  //delete todo
  const deleteTodo = () => {
    const newList = removeItemAtIndex(list, index);
    setlist(newList);

    if (newList.length === 0) {
			localStorage.setItem("todoListStorage", JSON.stringify(newList));
		}
  };

  //edit todo
  const editTodo = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(list, index, {
      ...item,
      text: value,
    });
    setlist(newList);
  };

  //helper function for edit
  const replaceItemAtIndex = (arr, index, newValue) => {
    //...arr.slice(0, index) ==> copy the arr from 0 to index
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  };

  //helper function for delete
  const removeItemAtIndex = (arr, index) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  };

  const toggleComplete = () => {
    const newList = replaceItemAtIndex(list, index, {
      ...item,
      completed: !item.completed,
    });
    setlist(newList);
  };

  return (
    <div ref={ref} className="todo">
      <div className="todo__container">
        <Checkbox
          color="primary"
          checked={item.completed}
          onChange={toggleComplete}
        />
        <input
          className={item.completed ? "lineThrough" : null}
          type="text"
          value={item.text}
          onChange={editTodo}
        />
        <IconButton onClick={deleteTodo}>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
});

export default Todo;
