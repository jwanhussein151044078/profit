import { ConfigProvider } from 'antd';
import './App.css';
import { RootRouters } from './routers';
import React from 'react';
import { BrowserRouter } from 'react-router';

function App(){
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2563eb",
          },
        }}
      >
        <RootRouters/>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
