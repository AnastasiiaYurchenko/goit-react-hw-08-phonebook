import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
import { Button, Form, Label } from './RegisterForm.styled';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
      // этот объект приходит в credentials
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};

export default RegisterForm;
