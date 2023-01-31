import React, { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider2",
    email: "inakiunzaga88@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
      <h1>Formulario simple</h1>
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
      {username === "strider2" && <Message />}
    </>
  );
};
