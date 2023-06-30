import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const GuestPage: React.FC = () => {
  return (
    <div>
      <Heading>Welcome to the Booking App</Heading>
      {/* Add any additional content or components as needed */}
    </div>
  );
};

export default GuestPage;
