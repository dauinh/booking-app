import { useState } from 'react';
import HostPage from './pages/host';
import GuestPage from './pages/guest';

// page: biggest component => organism
// nav bar: big component => molecules
// links: smaller components => atoms

function App() {
  const isHost = true;
  if (isHost) {
    return <HostPage/>
  } else {
    return <GuestPage/>
  }
  
}

export default App
