import React from "react";
import { BsTrash3Fill } from "react-icons/bs";
import { FaRegPenToSquare } from "react-icons/fa6";
import { Item as Todo } from "./ItemList";

interface Props{
    item: Todo;
    handleToggleTodo: (id:number) => void;
    updateTask: (val:string, task_id: number) => void;
    deleteTodo: (id:number) => void
}

const Item = ({item, handleToggleTodo, updateTask, deleteTodo}: Props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <input type="checkbox" checked={item.completed} onChange={() => handleToggleTodo(item.id)} />
        <span className={item.completed ? "line-through" : ""}>{item.title}</span>
      </div>

      <div>
        <FaRegPenToSquare onClick={() => updateTask(item.title, item.id)}/>
        <BsTrash3Fill onClick={() => deleteTodo(item.id)}/>
      </div>
    </li>
  );
};

export default Item;
