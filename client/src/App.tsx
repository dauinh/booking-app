import { Route, Routes } from 'react-router-dom';
import HostDashboard from './pages/hostDashboard';
import GuestPage from './pages/guestPage';
import LoginPage from './pages/loginPage';
import PropertyPage from './pages/propertyPage';
import HostProfilePage from './pages/hostProfilePage';

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="host" element={<HostDashboard />}>
        <Route path="profile" element={<HostProfilePage />} />
        <Route path="properties" element={<PropertyPage />} />
      </Route>
      <Route path="guest/profile" element={<GuestPage />} />
    </Routes>
  );
}

export default App;
