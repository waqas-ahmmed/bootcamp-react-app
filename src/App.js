import React from 'react';
import './App.css';
import Dinner from './dinner.js';


function App() {
  return (
    <div className="App">
      <Dinner dishName="Chicken karhai" sweetDish="kheer"/>
      
      <hr/>
      
      <Dinner dishName="Chicken Nehari" sweetDish="jaleebi"/>

      <hr/>

      <Dinner dishName="Chicken Biryani" sweetDish="gajar ka halwa"/>
    </div>
  );
}

export default App;
