import React from "react";
import { Radio } from "antd";

export function RadioBtn(props){
  return (
    <Radio.Group
      block
      options={props.options}
      value={props.value}
      optionType="button"
      buttonStyle="solid"
      onChange={(e)=>props.onChange?.(e.target.value)}
    />
  );
}