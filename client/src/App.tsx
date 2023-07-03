import { Route, Routes } from 'react-router-dom';
import HostPage from './pages/hostPage';
import GuestPage from './pages/guestPage';
import LoginPage from './pages/loginPage';
import PropertyPage from './pages/propertyPage';
import HostProfilePage from './pages/hostProfilePage';

function App() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="host" element={<HostPage />}>
        <Route path="profile" element={<HostProfilePage />} />
        <Route path="property" element={<PropertyPage />} />
      </Route>
      <Route path="guest/profile" element={<GuestPage />} />
    </Routes>
  );
}

export default App;
