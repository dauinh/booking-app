import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getHostProfile } from '../api/profile';
import { Host } from '../types/host.type';
import HostCard from '../components/HostCard';

const HostPage: React.FC = () => {
  const [data, setData] = useState<Host>();

  const fetchData = async () => {
    const host = await getHostProfile();
    console.log(host);
    setData(host);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (!data) { return null;}

  return (
    <div>
      <p>hello world</p>
      {/* <HostCard data={data}/> */}
    </div>
  );
};

export default HostPage;
