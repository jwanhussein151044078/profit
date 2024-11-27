import { Col, Flex, Radio, Row, Space } from "antd";
import React from "react";
import { OrdersTable, RadioBtn } from "../components";

export function ProfitListScreen(){
  return (
    <Row className="h-full mr-0 ml-0 bg-transparent" gutter={16}>
      <Col span={19} className="rounded-lg px-4 bg-transparent">
        <div className="flex items-center justify-center h-full bg-white rounded-lg">
          <OrdersTable/>
        </div>
      
      </Col>
      <Col span={5} className=" rounded-lg px-4">
        <div className="flex items-center justify-center h-full bg-white rounded-lg px-2 py-2">
          <Flex vertical gap="middle" className=" h-full w-full">
            <div className="w-full h-1/2">
              <text className="font-bold text-lg text-gray-600"> Listeleme </text>
              <RadioBtn
                options = {[{label:"Siparişe Göre",value:"1"},{label:"ürüne Göre",value:"2"}]}
                value   = {"1"}
                onChange = {(val)=> console.log(val)}
              />
              <div className="h-4"/>
              <text className="font-bold text-lg text-gray-600"> Para Birimi </text>
              <RadioBtn
                options = {[{label:"USD",value:"USD"},{label:"TL",value:"TL"}]}
                value   = {"TL"}
                onChange = {(val)=> console.log(val)}
              />
              
            </div>
            <div className="w-full h-1/2 flex items-center justify-end flex-col pb-4">          
              <text className="font-bold text-2xl text-gray-600"> Toplam Karlilik </text>
              <text className="font-bold text-xl text-gray-900 mt-4"> 222.222 USD </text>
            </div>
          </Flex>
        </div>
      </Col>  
    </Row>
    
  );
}