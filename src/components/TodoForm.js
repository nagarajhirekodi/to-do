import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function TodoForm({ addTodo, index, todo }) {
  const bucketList = useSelector((state) => state.bucketList);
  const [value, setValue] = useState({
    name: "",
    description: "",
    category: "",
    categoryList: [],
  });

  React.useEffect(() => {
    let buckets = [];
    bucketList.map((bucket) => {
      buckets.push(bucket.category);
    });
    let uniqBuckets = [...new Set(buckets)];
    setValue({ ...value, categoryList: uniqBuckets });
  }, [bucketList]);

  const handleSubmit = (e) => {
    let newTodo = {
      text: value.name,
      description: value.description,
      isCompleted: index ? todo.isCompleted : false,
      category: value.category,
    };
    if (index) {
      addTodo(index, newTodo);
    } else {
      addTodo(newTodo);
    }
    handleClear();
  };

  const handleClear = () => {
    setValue({
      name: "",
      description: "",
      category: "",
    });
  };

  const onChange = (e) => {
    let name = e.target.name;
    let v = e.target.value;
    setValue({
      ...value,
      [name]: v,
    });
  };

  return (
    <form className="todo">
      <h3 style={{ textAlign: "center" }}>
        {todo ? "Update " : "Add "} {"To do"}{" "}
      </h3>
      <div className="form-group">
        <label>Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          value={value.name}
          onChange={onChange}
        />
      </div>

      <div className="form-group">
        <label>Category</label>
        <input
          type="text"
          list="categoryList"
          name="category"
          className="form-control"
          value={value.category}
          onChange={onChange}
        />
        <datalist id="categoryList">
          {value.categoryList &&
            value.categoryList.map((category, i) => (
              <option key={`${category + i}`}>{category}</option>
            ))}
        </datalist>
      </div>

      <div className="form-group">
        <label>Description</label>
        <textarea
          name="description"
          type="text"
          className="form-control"
          value={value.description}
          onChange={onChange}
          rows="4"
          cols="50"
        />
      </div>

      <div>
        <button type="button" className="btn" onClick={handleClear}>
          Clear
        </button>
        <button
          type="button"
          style={{ float: "right" }}
          className="btn btn-primary"
          disabled={!value.name}
          onClick={handleSubmit}
        >
          {todo ? "Update" : "Save"}
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
