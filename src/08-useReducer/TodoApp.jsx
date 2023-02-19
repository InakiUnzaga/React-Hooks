import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: "recolectar la piedra del alma",
  //   done: false,
  // },
];
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };
  const HandleDeleteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };

  return (
    <>
      <h1>
        TodoApp:10 ,<small> pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoLISt */}
          <TodoList todos={todos} onDeleteTodo={HandleDeleteTodo} />
          {/* TodoLISt */}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd */}
          <TodoAdd onNewTodo={handleNewTodo} />
          {/* fin */}
        </div>
      </div>
    </>
  );
};
