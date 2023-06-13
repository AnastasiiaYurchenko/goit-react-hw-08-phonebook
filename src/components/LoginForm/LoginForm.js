import React from 'react';
import { useDispatch } from 'react-redux';
// import { Form } from 'react-router-dom';
import { logIn } from 'redux/auth/auth-operations';
import { Button, Form, Label } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      // этот объект уходит в credentials в auth-operations
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LoginForm;
