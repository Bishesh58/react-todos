import React, { forwardRef } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";
import "./Todo.css";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Check } from "@material-ui/icons";
import RadioButton from "@material-ui/core/Radio";


const Todo = forwardRef(({ item }, ref) => {

  const [list, setlist] = useRecoilState(todoListState);
  const index = list.findIndex((listItem) => listItem === item);

  //delete todo
  const deleteTodo = () => {
    const newList = removeItemAtIndex(list, index);
    setlist(newList);
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
  const replaceItemAtIndex=(arr, index, newValue) =>{
    //...arr.slice(0, index) ==> copy the arr from 0 to index
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }

  //helper function for delete
  const removeItemAtIndex = (arr, index) =>{
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }


  return (
    <div ref={ref} className="todo">
        <div className="todo__container">
          <RadioButton />
          <input type="text" value={item.text} onChange={editTodo} />
          <IconButton >
            <Check />
          </IconButton>
          <IconButton onClick={deleteTodo}>
            <Delete />
          </IconButton>
        </div>
     
    </div>
  );
});

export default Todo;
