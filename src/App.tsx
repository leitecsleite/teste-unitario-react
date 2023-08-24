import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HomeLazyComponent } from './components/LazyComponent/index,';

export  const App =  () =>{
  return (
    <div className="App">
      <header className="App-header">
         <HomeLazyComponent/>
      </header>
    </div>
  );
}

export default App;
