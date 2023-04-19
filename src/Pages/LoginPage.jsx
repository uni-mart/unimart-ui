import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from 'components/Message'
import '../css/ProfilePage.css'
import FormContainer from 'components/FormContainer'
import { login } from '../Actions/UserActions'


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] =useState(false);

  const togglePassword = () => setShowPassword(!showPassword)

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
                <div>
                <Form.Control
                    type={showPassword ? 'text' :'password'} 
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) =>setPassword(e.target.value)}
                />
                <Button variant="link" onClick={togglePassword}>
                    {showPassword ? <i class="fas fa-eye" aria-hidden="true"></i> : <i class="fas fa-eye-slash" aria-hidden="true"></i>}
                </Button>
                
                </div>
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