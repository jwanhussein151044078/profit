import './App.css';
import { RootRouters } from './routers';
import React from 'react';
import { BrowserRouter } from 'react-router';

function App(){
  return (
    <BrowserRouter>
      <RootRouters/>
    </BrowserRouter>
  );
}

export default App;
