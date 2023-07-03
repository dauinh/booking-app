import HostNavBar from '../components/HostNavBar';
import { Outlet } from 'react-router-dom';

const HostDashboard: React.FC = () => {
  return (
    <>
      <HostNavBar />
      <Outlet />
    </>
  );
};

export default HostDashboard;
