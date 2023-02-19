import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const { todos, handleNewTodo, HandleDeleteTodo, onToggleTodo } = useTodo();

  console.log(todos);
  return (
    <>
      <h1>
        TodoApp:10 ,<small> pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* TodoLISt */}
          <TodoList
            todos={todos}
            onDeleteTodo={HandleDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
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
