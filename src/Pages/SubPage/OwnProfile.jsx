import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ButtonGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash, faEdit } from "@fortawesome/free-solid-svg-icons";
// import '../css/ProfilePage.css'; // Import custom styles for the profile page
import "../../css/ProfilePage.css"

function ProfilePage() {
    const [username, setUsername] = useState('John Doe');
    const [password, setPassword] = useState('VictorMYman');
    const [email, setEmail] = useState('johndoe@example.com');
    const [studentId, setStudentId] = useState('123456');
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword(!showPassword)

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleStudentIdChange = (event) => {
        setStudentId(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement update functionality
    };

    return (
        <Container fluid className="profile-page">
            <div className="text-center mb-4">
                <img src="https://via.placeholder.com/150" alt="User Profile" className="rounded-circle" width="150" height="150" />
                <Button variant="link"><i className="fas fa-edit" aria-hidden="true"></i></Button>
            </div>

            <div className='profile-page-form'>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <div className="input-group">
                            <Form.Control type="text" value={username} onChange={handleUsernameChange} />
                            <Button variant="link">
                                <i className="fas fa-edit" aria-hidden="true"></i>
                            </Button>
                        </div>
                    </Form.Group>

                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <div className="input-group">
                            <Form.Control
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={handlePasswordChange}

                            />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    {showPassword ? (
                                        <FontAwesomeIcon icon={faEyeSlash} onClick={togglePassword} />
                                    ) : (
                                        <FontAwesomeIcon icon={faEye} onClick={togglePassword} />
                                    )}
                                </span>
                                <span className="input-group-text">
                                    <FontAwesomeIcon icon={faEdit} />
                                </span>
                            </div>
                        </div>
                    </Form.Group>




                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <div className="input-group">
                            <Form.Control type="email" value={email} onChange={handleEmailChange} />
                            <Button variant="link">
                                <i className="fas fa-edit" aria-hidden="true"></i>
                            </Button>
                        </div>
                    </Form.Group>
                    <Form.Group controlId="formStudentId">
                        <Form.Label>Student ID</Form.Label>
                        <div className="input-group">
                            <Form.Control type="text" value={studentId} onChange={handleStudentIdChange} />
                            <Button variant="link">
                                <i className="fas fa-edit" aria-hidden="true"></i>
                            </Button>
                        </div>
                    </Form.Group>
                    <Button type="submit" variant="primary" className='py-3'>Update</Button>
                </Form>
            </div>
        </Container>
    );
}

export default ProfilePage;
