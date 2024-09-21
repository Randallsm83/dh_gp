import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react';
import './App.css'
import LoginButton from './components/LoginButton'
import LogoutButton from './components/LogoutButton'

function App() {

  const { isLoading, isAuthenticated, error, user} =
    useAuth0();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <LoginButton />
      </div>
    </>
  )
}

export default App
