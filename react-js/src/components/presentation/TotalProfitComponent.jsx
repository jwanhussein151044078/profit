import React from "react";
import { Avatar, Button, Card, Skeleton, Typography } from "antd";

export function TotalProfitComponent(props){

  return (
    <Card  className=" w-full">
      <Card.Meta
        title="Total Profit"
        description={
          <Skeleton 
            loading={props.loading} 
            paragraph={{
              rows: 1,
              width: '70%'
            }}
            active
            title = {false}
          >
            <Typography.Title level={3} style={{ margin: 0 }}>
              {props.profit}
            </Typography.Title>
          </Skeleton>
          
        }
      />
    </Card>
  );
}