import React from 'react';
import { useAuth0 } from "@auth0/auth0-react"
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile'

const SessionManager = () => {
  const {isLoading, isAuthenticated, error} = useAuth0();

  console.log(useAuth0())
  if (isLoading) {
      return <div>Loading...</div>;
    }
  if (error) {
    console.log(error)
    return <div>Oops... {error.message}</div>;
  }

  if (isAuthenticated) {
    return (
      <div>
        <Profile />
        <LogoutButton />
      </div>
    )
  } else {
    return <LoginButton />
  }
}

export default SessionManager;
