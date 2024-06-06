import { useState } from "react";
import Header from "./components/Header";
import ItemList, { Item } from "./components/ItemList";
import Filter from "./components/Filter";

const App = () => {
  const [task, setTask] = useState("");
  const [taskId, setTaskId] = useState(0);
  const [filterTask, setFilterTask] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, title: "Do the laundry 🤽👔", completed: false },
    { id: 2, title: "Learn JavaScript 🧑‍💻", completed: true },
    { id: 3, title: "Buy groceries 🛍️", completed: false },
    { id: 4, title: "Call mom 👩‍🦰", completed: true },
  ]);

  let filteredTodos =
    filterTask === "completed"
      ? todos.filter((todo) => todo.completed == true)
      : filterTask === "not completed"
      ? todos.filter((todo) => todo.completed == false)
      : todos;

  const handleFilterTask = (val: string) => {
    setFilterTask(val);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodoTitle = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === taskId ? { ...todo, title: task } : todo
      )
    );
  };

  const updateTask = (val: string, task_id: number) => {
    setTask(val);
    setTaskId(task_id);
  };

  const toggleTodos = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const addTodo = (data: Item) => {
    setTodos([...todos, data]);
  };

  return (
    <div className="container">
      <Header
        createTodo={addTodo}
        taskId={taskId}
        task={task}
        updateTodoTitle={updateTodoTitle}
        updateTask={updateTask}
      />
      <ItemList
        items={filteredTodos}
        handleToggleTodo={toggleTodos}
        updateTask={updateTask}
        deleteTodo={deleteTodo}
      />
      <Filter filterTask={filterTask} handleFilterTask={handleFilterTask} />
    </div>
  );
};

export default App;
