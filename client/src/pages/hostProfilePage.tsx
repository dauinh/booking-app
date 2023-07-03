import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getHostProfile } from '../api/profile';
import { Host } from '../types/host.type';
import HostCard from '../components/HostCard';
import HostNavBar from '../components/HostNavBar';

const HostProfilePage: React.FC = () => {
  const [data, setData] = useState<Host>();

  const fetchData = async () => {
    const host = await getHostProfile();
    setData(host);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <HostCard data={data} />
    </>
  );
};

export default HostProfilePage;
