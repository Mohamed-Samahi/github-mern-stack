import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext.jsx';
import { AuthContextProvider } from './contexts/AuthContext.jsx';
import { ModalProvider } from './contexts/Logout.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <ModalProvider>
          <UserProvider>
            <App />
          </UserProvider>
        </ModalProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
)