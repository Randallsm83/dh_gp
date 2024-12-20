import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react'

import App from './App'

import './index.css'

const root = createRoot(document.getElementById('root'))

root.render(
  <Auth0Provider
    domain="dev-md802pukuf77blph.us.auth0.com"
    clientId="NqTKdYVfNpUWUMa8GwVg3q1ltcdopKPA"
    authorizationParams={{
      redirect_uri: "http://localhost:5173"
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
  >
    <App />
  </Auth0Provider>,
)
