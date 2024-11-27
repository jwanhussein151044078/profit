import React from "react";
import { Button } from "antd";

export function PrimaryBtn(props){
  return (
    <Button type="primary"
      {...props}
      onClick={()=>props.onClick?.()}
      
    >
      {props.title}
    </Button>
  );
}