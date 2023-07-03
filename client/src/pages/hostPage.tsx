import styled from 'styled-components';
import HostNavBar from '../components/HostNavBar';
import { Outlet } from 'react-router-dom';

const HostPage: React.FC = () => {
  return (
    <>
      <HostNavBar />
      <Outlet />
    </>
  );
};

export default HostPage;
