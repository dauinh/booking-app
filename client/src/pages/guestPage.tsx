import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getGuestProfile } from '../api/profile';
import { Guest } from '../types/guest.type';
import GuestCard from '../components/GuestCard';

const Heading = styled.h1`
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const GuestPage: React.FC = () => {
  const [data, setData] = useState<Guest>();

  const fetchData = async () => {
    const guest = await getGuestProfile();
    setData(guest);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Heading>Welcome to the Booking App</Heading>
      <GuestCard data={data} />
    </div>
  );
};

export default GuestPage;
