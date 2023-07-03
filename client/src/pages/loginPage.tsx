import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { HttpPost } from '../api';

const SliderButton = styled.button<{ isToggled: boolean }>`
  background-color: ${({ isToggled }) => (isToggled ? 'orange' : 'grey')};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 16px;
`;

const LoginPage: React.FC = () => {
  const [isHost, setIsHost] = useState(false);

  const toggleIsHost = () => {
    setIsHost((prevIsHost) => !prevIsHost);
  };

  return (
    <>
      <SliderButton isToggled={isHost} onClick={toggleIsHost}>
        {isHost ? 'Host' : 'Guest'}
      </SliderButton>
      <LoginForm isHost={isHost} />
    </>
  );
};

const LoginForm = ({ isHost }: { isHost: boolean }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    }

    // Send an API request to the backend to authenticate the user
    if (isHost) {
      const token = await HttpPost('auth/login/host', data);
      if (token) {
        navigate('/host');
      }
    } else {
      const token = await HttpPost('auth/login/guest', data);
      if (token) {
        navigate('/guest');
      }
    }

    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login as {isHost ? 'Host' : 'Guest'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
