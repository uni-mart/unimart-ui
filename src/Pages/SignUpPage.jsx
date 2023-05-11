import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from 'components/Message'
import FormContainer from 'components/FormContainer'
import { login } from '../Actions/UserActions'
import axios from 'axios';


const SignUpPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch(login(email, password))
    // }
    const data = {
        firstname: firstName,
        lastname: lastName,
        email: email,
        password: password,
      };
      axios
      .post('https://uni-mart-server.onrender.com/api/v1/auth/register', data)
      .then((response) => {
        // Handle successful registration
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
    }
    return (
        <FormContainer>
            <h1>Register</h1>
            {/* {message && <Message variant={'danger'} >{message}</Message>}

           {error && <Message variant={'danger'} >{error}</Message>}
           {loading && <Loader />} */}
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='studentId' className='mb-2'>
                    <Form.Label>Student</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder='first name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='name' className='mb-2'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder='last name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='email' className='mb-2'>
                    <Form.Label>Student Email</Form.Label>
                    <Form.Control
                        required
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
                        required
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='confirmPassword' className='mb-2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        required
                        type='password'
                        placeholder='Enter Confirm Password'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' variant="primary" className='mt-4'>
                    Register
                </Button>

            </Form>
            <Row className='py-4 mb-4' >
                <Col>
                    Already Registered ? <Link
                        to='/login'>
                        Log In
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default SignUpPage