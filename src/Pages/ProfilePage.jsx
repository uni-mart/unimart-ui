import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import '../css/ProfilePage.css'; // Import custom styles for the profile page

function ProfilePage() {
  const [username, setUsername] = useState('John Doe');
  const [password, setPassword] = useState('VictorMYman');
  const [email, setEmail] = useState('johndoe@example.com');
  const [studentId, setStudentId] = useState('123456');
  const [showPassword, setShowPassword] =useState(false);

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
      <Row>
        <Col md={3} className="left-bar">
          <h1 className="display-5 mb-5">{username}</h1>
          <br />
          <br />
          <br />
          
            <ListGroup variant='flush' >
                <ListGroup.Item action variant="light"  className="list-item">Profile</ListGroup.Item>
                <ListGroup.Item action variant="light"  className="list-item">My products</ListGroup.Item>
                <ListGroup.Item action variant="light"  className="list-item">My orders</ListGroup.Item>
                <ListGroup.Item action variant="light"  className="list-item">Payment</ListGroup.Item>
            </ListGroup>
            
         
            
          
        </Col>
        <Col md={8}>
          <div className="text-center mb-4">
            <img src="https://via.placeholder.com/150" alt="User Profile" className="rounded-circle" width="150" height="150" />
            <Button variant="link"><i class="fas fa-edit" aria-hidden="true"></i></Button>
            
          
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <div className="input-group">
                <Form.Control type="text" value={username} onChange={handleUsernameChange} />
                <Button variant="link">
                <i class="fas fa-edit" aria-hidden="true"></i>
                </Button>
              </div>
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <div className="input-group">
                <Form.Control type={showPassword ? 'text' :'password'} value={password} onChange={handlePasswordChange} />
                <Button variant="link">
                <i class="fas fa-edit" aria-hidden="true"></i>
                </Button>
                <Button variant="link" onClick={togglePassword}>
                    {showPassword ? <i class="fas fa-eye" aria-hidden="true"></i> : <i class="fas fa-eye-slash" aria-hidden="true"></i>}
                </Button>
              </div>
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <div className="input-group">
                <Form.Control type="email" value={email} onChange={handleEmailChange} />
                <Button variant="link">
                <i class="fas fa-edit" aria-hidden="true"></i>
                </Button>
              </div>
            </Form.Group>
            <Form.Group controlId="formStudentId">
              <Form.Label>Student ID</Form.Label>
              <div className="input-group">
                <Form.Control type="text" value={studentId} onChange={handleStudentIdChange} />
                <Button variant="link">
                <i class="fas fa-edit" aria-hidden="true"></i>
                </Button>
              </div>
            </Form.Group>
            <Button type="submit" variant="primary">Update</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
