import React from "react";
import { BrowserRouter , Routes, Route, Navigate } from "react-router";
import { HomeScreen , ProfitListScreen } from "../screens";

export default function RootRouters(){
  return(<>
    <Routes>
      <Route key={"home"} path="/home" element={<HomeScreen />} />
      <Route path="/profit" element={<ProfitListScreen />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  </>);
}