import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from 'components/Message'
import FormContainer from 'components/FormContainer'
import { login } from '../Actions/UserActions'


const SignUpPage = () => {
    const [studentId, setStudentId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
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
                        placeholder='Enter Student ID'
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId='name' className='mb-2'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder='Enter Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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