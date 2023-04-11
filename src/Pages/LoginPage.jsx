import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from 'components/Message'
import FormContainer from 'components/FormContainer'
import { login } from '../Actions/UserActions'


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

  return (
    <FormContainer>
        <h1>Sign In</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) =>setEmail(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    placeholder='Enter Password'
                    value={email}
                    onChange={(e) =>setPassword(e.target.value)}
                >
                </Form.Control>
            </Form.Group>
            <Form.Group className="pt-2"controlId="signIn">
                <Button  type='submit' variant="primary">
                    Sign In
                </Button>
                </Form.Group>
        </Form>
                <Row className='py-3' >
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