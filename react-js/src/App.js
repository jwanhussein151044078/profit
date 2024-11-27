import './App.css';
import { RootRouters } from './routers';
import React, { useState } from 'react';
import { HomeOutlined, MenuFoldOutlined, MenuUnfoldOutlined, UnorderedListOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { Header, Slider, TopBar } from './layout';
import { BrowserRouter } from 'react-router';
const { Content, Footer } = Layout;
const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
  (icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon),
    label: `nav ${index + 1}`,
  }),
);

function App(){
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onCollapse=()=>{
    setCollapsed((prev)=> !collapsed);
  }
  return (
    <BrowserRouter>
      <Layout className='h-screen'>
        <Slider collapsed={collapsed}/>
        <Layout>
          <TopBar collapsed={collapsed} onCollapse={onCollapse}/>
          <Content className='m-4'>
            <div className='w-full h-full rounded-lg'>
              <RootRouters/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'end' }}>
            Test Project ©{new Date().getFullYear()} Created by Jvan Hussein
          </Footer>
        </Layout>
      </Layout>
    </BrowserRouter>
    // <RootRouters/>
  );
}

export default App;
