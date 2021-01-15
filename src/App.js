import React from "react";
import "./App.css";

// component to display the to-do
function Todo({
  todo,
  index,
  completeTodo,
  uncompleteTodo,
  removeTodo,
  isUpdateTodo,
  updateTodo,
  isUpdate,
}) {
  if (isUpdate) {
    return (
      <div>
        <TodoForm addTodo={updateTodo} index={index} todo={todo} />
      </div>
    );
  }
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}
      <div>
        <button
          onClick={() =>
            todo.isCompleted ? uncompleteTodo(index) : completeTodo(index)
          }
        >
          {todo.isCompleted ? "UnComplete" : "Complete"}
        </button>
        <button
          style={{ margin: "0 10px" }}
          onClick={() => isUpdateTodo(index)}
        >
          Edit
        </button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

// component to create a to-do
function TodoForm({ addTodo, index, todo }) {
  const [value, setValue] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    if (todo) {
      addTodo(index, value);
    } else {
      addTodo(value);
    }
    setValue("");
  };

  React.useEffect(() => {
    if (todo) {
      setValue(todo.text);
    }
  }, [todo]);

  return (
    <form onSubmit={handleSubmit} className="todo">
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button style={{ marginLeft: 20 }}>{todo ? "Update" : "Create"}</button>
    </form>
  );
}

function App(props) {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React", isCompleted: false, isUpdate: false },
    { text: "Build todo app", isCompleted: false, isUpdate: false },
    { text: "Upload it to GitHub :)", isCompleted: false, isUpdate: false },
  ]);

  //method to add a to-do
  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  //method to mark the to-do as completed
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  //method to mark the to-do as completed
  const uncompleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  };

  //method to delete a to-do
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //check whether a todo is editable
  const isUpdateTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isUpdate = true;
    setTodos(newTodos);
  };

  //method to update a to-do
  const updateTodo = (index, text) => {
    const newTodos = [...todos];
    newTodos[index] = { text };
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            uncompleteTodo={uncompleteTodo}
            removeTodo={removeTodo}
            isUpdateTodo={isUpdateTodo}
            updateTodo={updateTodo}
            isUpdate={todo.isUpdate}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
