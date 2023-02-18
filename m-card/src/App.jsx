import React, { useState, useEffect } from "react";
import Card from "./components/card.jsx";
import CardList from "./components/listOfCards.jsx";
import './styles/images.css';

const App = () => { 
  return ( 
    <section>
      <CardList length = '5' /> 
      <p>Hy</p>
    </section>
  )
};

export default App;