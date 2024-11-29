import React from "react";
import { Routes, Route, Navigate } from "react-router";
import { HomeScreen , ProfitListScreen } from "../screens";
import { Layout } from "../layout";

export default function RootRouters(){
  return(<>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/profit" element={<ProfitListScreen />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  </>);
}