import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import SettingsProvider from './Context/Settings/index.jsx';

import App from './App.js';
import AuthProvider from './Context/Auth/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AuthProvider>
      <SettingsProvider>
        <App />
      </SettingsProvider>
      </AuthProvider>
    </MantineProvider>
  </React.StrictMode>
);

