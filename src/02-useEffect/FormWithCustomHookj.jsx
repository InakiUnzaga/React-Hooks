import React, { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, username, email, password, onResetForm } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  useEffect(() => {
    // console.log("useEffect");
  }, []);

  useEffect(() => {
    // console.log("useEffect");
  }, [formState]);

  useEffect(() => {
    // console.log("useEffect");
  }, [email]);

  return (
    <>
      <h1>Formulario con custom hook</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
        autoComplete="off"
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="inakiunzaga88@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
        autoComplete="off"
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="contraseña"
        name="password"
        value={password}
        onChange={onInputChange}
        autoComplete="off"
      />
      <button onClick={onResetForm} className="btn btn-primary mt-2">
        Borrar
      </button>
    </>
  );
};
