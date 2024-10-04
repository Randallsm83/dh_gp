import './index.css'
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    domain="dev-md802pukuf77blph.us.auth0.com"
    clientId="NqTKdYVfNpUWUMa8GwVg3q1ltcdopKPA"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
)
