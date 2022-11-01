import React from 'react';
import Header from './Components/Header/Header';
import ToDo from './Components/ToDo';
import Footer from './Components/Footer/Footer';

export default class App extends React.Component {
  render() {
    return (
      <>
      <Header />
        <ToDo />
      <Footer />
      </>
    );
  }
}
