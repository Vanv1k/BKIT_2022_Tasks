// Примеры компонентов из проекта

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import React, { useState } from 'react';
import styled from 'styled-components';

function Login({ signInWithGoogle, logoutUser, handleRegistrate, handleLogin, setEmail, setPassword, setName }) {
  return (

    <Container fluid>
        <Form style = {{margin: '5% 20% 0 20%'}} onSubmit={handleLogin}>
        <h1>Login</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e)=> 
        {
            setEmail(e.target.value);
        }}/>
        <Form.Text className="text-muted">
          Email address is required
        </Form.Text>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formLoginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={(e)=>
            {
                setPassword(e.target.value);
            }}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formLoginCheckbox">
            <Form.Check type="checkbox" label="I agree with terms of service" />
        </Form.Group>
        <Button variant="success" type="submit" onClick={handleLogin}>
            login
        </Button>
        </Form>
        <Button onClick={signInWithGoogle}>
            Login with google
        </Button>
    </Container>
  );
}

const ButtonCustom = styled(Button)`
    
    text-decoration: underline;
    background-color: white;
    color: black;
    animation: none;
    border: none;
    &:hover {
        background-color: white;
        animation: none;
        color: green;
    }
    &:not(:disabled):not(.disabled) {
        background-color: white;
        animation: none;
        color: black;
    }
`;

export default Login;