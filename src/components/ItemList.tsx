import React from "react";
import Item from "./Item";

export interface Item {
  id: number;
  title: string;
  completed: boolean;
}

interface Props {
  items: Item[];
  handleToggleTodo: (id: number) => void;
  updateTask: (val:string, task_id:number) => void;
  deleteTodo: (id: number) => void
}

const ItemList = ({ items, handleToggleTodo, updateTask, deleteTodo }: Props) => {
  return (
    <ul className="list-group todos mx-auto text-light delete">
      {items.map((item) => (
        <Item key={item.id} deleteTodo={deleteTodo} item={item} handleToggleTodo={handleToggleTodo} updateTask={updateTask} />
      ))}
    </ul>
  );
};

export default ItemList;

