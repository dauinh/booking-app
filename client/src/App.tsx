import { useState } from 'react';
import HostPage from './components/host';
import GuestPage from './components/guest';

function App() {
  const isHost = true;
  if (isHost) {
    return <HostPage/>
  } else {
    return <GuestPage/>
  }
  
}

export default App
