import React from 'react';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SettingsForm from './Components/SettingsForm';
import ToDo from './Components/ToDo';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ToDo/>} />
        <Route path="/settings" element={<SettingsForm/>} />
      </Routes>
      </BrowserRouter>
    );
  }
}
