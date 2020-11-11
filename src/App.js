import React from 'react';
import MainComponent from './components/mainComponent.jsx';
import './App.css';
import { BrowserRouter } from 'react-router-dom';


// Functional Component

const App =() =>{
  return(
    <BrowserRouter>
      <MainComponent />
    </BrowserRouter>
  )
}




export default App;
