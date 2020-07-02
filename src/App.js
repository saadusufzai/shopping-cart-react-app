import React from 'react';

import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Cart from './components/Cart/cart'
import {GlobalProvider} from './components/Context/GlobalContext'


function App() {
  return (
   
   <GlobalProvider>
      <Home />
      <Header />
      <Cart/>
      </GlobalProvider>  
  
  );
}

export default App;
