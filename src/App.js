import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Kursuslist from './components/Kursuslist';
import Footer from './components/Footer';
// import ProductList from './components/ProductList';
// import Details from './components/Details';
// import Cart from './components/Cart';
// import Default from './components/Default';
// import Modal from './components/Modal';


function App() {
  return (
    
    <React.Fragment>
      <Navbar />
      <Slider />
      <Switch>
        <Route exact path="/" component={Kursuslist} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
