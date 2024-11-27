import React from "react";
import { useNavigate } from "react-router";
import { PrimaryBtn } from "../components";
import { Flex } from "antd";

export function HomeScreen(){
  let navigation = useNavigate();
  return (
    <div className="flex items-center justify-center h-full bg-white rounded-lg">
      <Flex vertical gap="middle">
        <h1 className="text-4xl font-bold text-blue-600">Hello, This is the Home Page</h1>
        <PrimaryBtn
          title   = "Go To Profit Screen"
          onClick = {()=> navigation("/profit")}
        />
      </Flex>
    </div>
  );
}