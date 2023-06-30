import { Route, Routes } from 'react-router-dom';
import HostPage from './pages/hostPage';
import GuestPage from './pages/guestPage';
import LoginPage from './pages/loginPage';
import PropertyPage from './pages/propertyPage';

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="host/profile" element={<HostPage />} />
      <Route path="host/property" element={<PropertyPage />} />
      <Route path="guest/profile" element={<GuestPage />} />
    </Routes>
  );
}

export default App;
