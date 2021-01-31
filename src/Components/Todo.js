import React, { forwardRef } from "react";
import { useRecoilValue } from "recoil";
import { todoListState } from "../atoms/todoListState";
import "./Todo.css";
import IconButton from "@material-ui/core/IconButton";
import { Delete, Edit } from "@material-ui/icons";
import RadioButton from "@material-ui/core/Radio";
import FlipMove from "react-flip-move";



const Todo = forwardRef(({todoList}, ref) => {
  return (
    <div ref={ref} className="todo">
       <FlipMove >
        {todoList.map((item) => {
          return (
             <div key={item.id} className="todo__container">
                <RadioButton />
                <li >{item.text}</li>
                <IconButton>
                    <Edit />
                </IconButton>
                <IconButton>
                    <Delete />
                </IconButton>
            </div>
           
          );
        })}
       </FlipMove>
    </div>
  );
})


export default Todo;
