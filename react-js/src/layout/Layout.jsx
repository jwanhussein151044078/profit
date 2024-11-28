
import React, { useState } from "react";
import { Content, Footer } from "antd/es/layout/layout";
import { Layout as LayoutAntd } from 'antd';
import { Outlet } from "react-router";
import { Slider } from "./Slider";
import { TopBar } from "./TopBar";

export function Layout(props){
  const [collapsed, setCollapsed] = useState(false);


  const onCollapse=()=>{
    setCollapsed((prev)=> !collapsed);
  }
  return (
    <LayoutAntd className='h-screen'>
        <Slider collapsed={collapsed}/>
        <LayoutAntd>
          <TopBar collapsed={collapsed} onCollapse={onCollapse}/>
          <Content className='m-4'>
            <div className='w-full h-full rounded-lg'>
              <Outlet/>
            </div>
          </Content>
          <Footer style={{ textAlign: 'end' }}>
            Test Project ©{new Date().getFullYear()} Created by Jvan Hussein
          </Footer>
        </LayoutAntd>
    </LayoutAntd>
  );
}