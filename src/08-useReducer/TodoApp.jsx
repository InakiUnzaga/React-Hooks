import React, { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { useTodo } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewTodo,
    HandleDeleteTodo,
    onToggleTodo,
  } = useTodo();

  return (
    <>
      <h1>
        TodoApp: {todosCount} ,
        <small> pendientes: {pendingTodosCount}</small>
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
