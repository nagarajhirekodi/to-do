import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBuckets } from "../actions/Actions";
import Modal from "./Modal";
import TodoForm from "./TodoForm";

function DisplayTODO(props) {
  const [state, setState] = useState({
    modal: false,
    index: "",
    todo: {},
  });
  const dispatch = useDispatch();
  const bucketList = useSelector((state) => state.bucketList);

  const toggle = () => {
    setState({ modal: !state.modal });
  };

  const handleCreate = (todo) => {
    const newTodos = [...bucketList, todo];
    dispatch(createBuckets(newTodos));
    toggle();
  };

  const updateTodo = (index, todo) => {
    const newTodos = [...bucketList];
    newTodos[index] = todo;
    dispatch(createBuckets(newTodos));
  };

  const handleUpdate = (index, todo) => {
    toggle();
    setState({ ...state, index: index, todo: todo });
  };

  const handleDelete = (index) => {
    const newTodos = [...bucketList];
    newTodos.splice(index, 1);
    dispatch(createBuckets(newTodos));
  };

  //method to mark the to-do as completed
  const completeTodo = (index) => {
    const newTodos = [...bucketList];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    dispatch(createBuckets(newTodos));
  };

  return (
    <React.Fragment>
      <div className="category-list">
        <div className="row">
          <div className="col-md-10">
            <h3 style={{ textAlign: "center" }}>{"To Do app"}</h3>
            <div style={{ color: "red", textAlign: "center" }}>
              *mark the checkbox for completed todo and viceversa
            </div>
          </div>
          <div className="col-md-2">
            <div style={{ display: "flex" }}>
              <div
                style={{
                  height: 10,
                  width: 10,
                  background: "lightseagreen",
                  marginTop: 7.5,
                  marginRight: 6,
                }}
              />
              <div>Complete</div>
            </div>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  height: 10,
                  width: 10,
                  background: "white",
                  marginTop: 7.5,
                  marginRight: 6,
                }}
              />
              <div>InComplete</div>
            </div>
          </div>
        </div>
        <div
          style={{ color: "blue", textAlign: "center" }}
          className="category col-md-3"
          onClick={toggle}
        >
          Add to-do
        </div>
        {bucketList.map((todo, index) => (
          <div
            key={`${todo.category + index}`}
            style={{ backgroundColor: todo.isCompleted ? "lightseagreen" : "" }}
            className="category col-md-3"
          >
            <input
              type="checkbox"
              style={{
                marginRight: 10,
              }}
              checked={todo.isCompleted}
              onClick={() => completeTodo(index)}
            />
            <span>{todo.text}</span>
            <span>{todo.description}</span>
            <div className="footer">
              <button
                type="button"
                className="btn btn-secondary"
                onChange={() => handleUpdate(index, todo)}
              >
                Edit
              </button>
              <button
                type="button"
                style={{ float: "right" }}
                className="btn btn-danger"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal show={state.modal} handleClose={toggle}>
        <TodoForm
          addTodo={state.index ? updateTodo : handleCreate}
          index={state.index}
          todo={state.todo}
        />
      </Modal>
    </React.Fragment>
  );
}

export default DisplayTODO;
