import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { loginGuest, loginHost } from '../api/login';

const SliderButton = styled.button<{ isToggled: boolean }>`
  background-color: ${({ isToggled }) => (isToggled ? 'orange' : 'grey')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
`;

const LoginPage: React.FC = () => {
  const [isHost, setIsHost] = useState(false);

  const toggleIsHost = () => {
    setIsHost((prevIsHost) => !prevIsHost);
  };

  return (
    <div>
      <SliderButton isToggled={isHost} onClick={toggleIsHost}>{isHost ? "Host" : "Guest"}</SliderButton>
      <LoginForm isHost={isHost} />
    </div>
  );
};

const LoginForm = ({ isHost }: {
  isHost: boolean;
}) => {
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

    // Send an API request to the backend to authenticate the user
    if (isHost) {
      const token = await loginHost(email, password);
      if (token) { navigate('/host/profile'); }
    } else {
      const token = await loginGuest(email, password);
      if (token) { navigate('/guest/profile'); }
    }

    // Reset the form
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Login as {isHost ? "Host" : "Guest"}</h1>
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
}

export default LoginPage;
