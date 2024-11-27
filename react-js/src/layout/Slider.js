import { ConfigProvider, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';

export function Slider(props){
  let navigation = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState('home');

  useEffect(()=>{
    setSelected(location.pathname?.split("/")[1]);
    return()=>{};
  },[location]);

  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed}>
      <div className="h-16 px-2 py-4">
        <div className='bg-gray-600 h-full w-full rounded-md'/>
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#2563eb", // Change selected item color
          },
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={selected}
          selectedKeys={selected}
          items={[
            {
              key: 'home',
              icon: <HomeOutlined/>,
              label: 'HOME',
              onClick : ()=> navigation("/home")
            },
            {
              key: 'profit',
              icon: <UnorderedListOutlined />,
              label: 'LIST',
              onClick : ()=> navigation("/profit")
            }
          ]}
        />
      </ConfigProvider>
    </Sider>
  );
}