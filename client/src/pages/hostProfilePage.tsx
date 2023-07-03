import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HttpGet } from '../api';
import { Host } from '../types/host.type';
import HostCard from '../components/HostCard';

const HostProfilePage: React.FC = () => {
  const [data, setData] = useState<Host>();

  const fetchData = async () => {
    const host = await HttpGet('/host/profile');
    setData(host);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data && <HostCard data={data} />}
    </>
  );
};

export default HostProfilePage;
