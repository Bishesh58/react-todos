import React, { forwardRef } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../atoms/todoListState";
import "./Todo.css";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Edit } from "@material-ui/icons";
import RadioButton from "@material-ui/core/Radio";


const Todo = forwardRef(({ item }, ref) => {

  const [list, setlist] = useRecoilState(todoListState);
  const index = list.findIndex((listItem) => listItem.item === item);

  //delete todo
  const deleteTodo = () => {};
  //edit todo
  const editTodo = (e) => {
    // const targetValue = e.target.value;
    // const newList = replaceItemAtIndex(list, index, {
    //   ...todoList,
    //   text: targetValue,
    // });
    // setlist(newList);
  };

  return (
    <div ref={ref} className="todo">
        <div className="todo__container">
          <RadioButton />
          <input type="text" value={item.text} onChange={editTodo} />
          <IconButton onClick={editTodo}>
            <Edit />
          </IconButton>
          <IconButton onClick={deleteTodo}>
            <Delete />
          </IconButton>
        </div>
     
    </div>
  );
});

export default Todo;
