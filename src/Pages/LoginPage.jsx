import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from 'components/Message'
import '../css/ProfilePage.css'
import FormContainer from 'components/FormContainer'
import { login } from '../Actions/UserActions'
import axios from 'axios';

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword)

    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch(login(email, password))
    // }
    const data = {
        email: email,
        password: password,
      };
      axios
      .post('https://uni-mart-server.onrender.com/api/v1/auth/login', data)
      .then((response) => {
        // Handle successful login
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  };
    return (
        <FormContainer>
            <h1>Sign In</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email' className='mb-2'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password' className='mb-2'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group className="pt-4" controlId="signIn">
                    <Button type='submit' variant="primary">
                        Sign In
                    </Button>
                </Form.Group>
            </Form>
            <Row className='py-4 mb-4'>
                <Col>
                    New Customer ? <Link
                        to='/signUp'>
                        Sign Up
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default LoginPage