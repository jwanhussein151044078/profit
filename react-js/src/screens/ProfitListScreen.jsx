import { Col, Flex, Row } from "antd";
import React from "react";
import { OrdersTable, ProductsTable, RadioBtn } from "../components";
import { CURRENCY, LISTINGMETHOD } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { getAppSettings, toggleCurrency, toggleListingMethod } from "../features/appSettingSlice";

export function ProfitListScreen(){
  const settings = useSelector(getAppSettings);
  const dispatch = useDispatch();
  return (
    <Row className="h-full mr-0 ml-0 bg-transparent" gutter={16}>
      <Col span={19} className="rounded-lg px-4 bg-transparent">
        <div className="flex items-center justify-center h-full bg-white rounded-lg">
          {settings.listingMethod == LISTINGMETHOD.ORDER ?
              <OrdersTable/>
            :
              <ProductsTable/>  
          }
        </div>
      
      </Col>
      <Col span={5} className=" rounded-lg px-4">
        <div className="flex items-center justify-center h-full bg-white rounded-lg px-2 py-2">
          <Flex vertical gap="middle" className=" h-full w-full">
            <div className="w-full h-1/2">
              <text className="font-bold text-lg text-gray-600"> Listeleme </text>
              <RadioBtn
                options = {[{label:"Siparişe Göre",value:LISTINGMETHOD.ORDER},{label:"ürüne Göre",value:LISTINGMETHOD.PRODUCT}]}
                value   = {settings.listingMethod}
                onChange = {(val)=> dispatch(toggleListingMethod())}
              />
              <div className="h-4"/>
              <text className="font-bold text-lg text-gray-600"> Para Birimi </text>
              <RadioBtn
                options  = {[{label:"USD",value:CURRENCY.USD},{label:"TL",value:CURRENCY.TL}]}
                value    = {settings.currency}
                onChange = {(val)=> dispatch(toggleCurrency())}
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