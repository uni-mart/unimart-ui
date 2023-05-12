import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/ProfilePage.css'; // Import custom styles for the profile page
import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router-dom';

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
      <Row>
        <Sidebar username={username} />

        <Col md={8}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}

export default ProfilePage;
