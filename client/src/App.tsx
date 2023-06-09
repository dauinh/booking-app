import { useState } from 'react'
import HostPage from './components/host'
import GuestPage from './components/guest'

function App() {
  const isHost = false;
  if (isHost) {
    return <HostPage/>
  } else {
    return <GuestPage/>
  }
  
}

export default App
