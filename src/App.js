import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from './Context/Auth';
import { When } from 'react-if';

import Header from './Components/Header/Header';
import ToDo from './Components/ToDo';
import SettingsForm from './Components/SettingsForm';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Header />
      <When condition={isLoggedIn}>
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/settings" element={<SettingsForm />} />
        </Routes>
      </When>
    </BrowserRouter>
  );
}


export default App;