import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HostPage from './pages/host.page';
import GuestPage from './pages/guest.page';
import LoginPage from './pages/login.page';

// page: biggest component => organism
// nav bar: big component => molecules
// links: smaller components => atoms

function App() {
  return (
  <Router>
    <Routes>
      <Route index element={<App />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="host/profile" element={<HostPage />} />
    </Routes>
  </Router>)
}

export default App
