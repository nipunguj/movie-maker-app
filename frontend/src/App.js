import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Movies from './containers/Movies';
import AddMovie from './components/AddMovie';

const App = () => {
  return ( 
  <React.Fragment>
  <Header/>
  <Movies/>
  <AddMovie/>
  <Footer/>
  </React.Fragment>
    );
}
 
export default App;