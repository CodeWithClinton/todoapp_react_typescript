import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { Item } from './ItemList'

interface Props{
  createTodo: (data: Item) => void;
  task: string;
  updateTask: (val:string, task_id:number) => void;
  updateTodoTitle: () => void;
  taskId: number
}


const Header = ({createTodo, task, updateTask, updateTodoTitle, taskId}: Props) => {

  

  const newTodo = {
    id: Date.now(),
    title: task,
    completed: false
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault()

    if(!task) return ;

    if(taskId){
      updateTodoTitle()
    }

    else{
      createTodo(newTodo)
    }

    
    updateTask("", 0)
  }

  return (
    <header className="text-center text-light my-2">
            <h1 className="mb-4">Todo List</h1>
            <form className="search" onSubmit={handleSubmit}>
              <input
                className="form-control m-auto"
                type="text"
                name="search"
                placeholder="add todos"
                value={task}
                onChange = {(e) => updateTask(e.target.value, taskId)}
              />
      
              <button><FaPlus /></button>
            </form>
          </header>
  )
}

export default Header