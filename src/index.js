import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import ShopContextProvider from './Context/ShopContext.jsx';
import { UserAuthContextProvider } from './Context/LoginContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
      <UserAuthContextProvider>
        <App />
      </UserAuthContextProvider>
    </ShopContextProvider>
  </React.StrictMode>
);

reportWebVitals();
