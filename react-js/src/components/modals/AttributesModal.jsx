import { List, Modal, Typography } from "antd";
import React from "react";
import { useGetAttributesByDetailsIdQuery } from "../../features/productSlice";
import Title from "antd/es/typography/Title";


export function AttributesModal(props){

  const { data: attributes, isLoading, isFetching } = useGetAttributesByDetailsIdQuery(props.id, {skip: !props.id});

  console.log(attributes)

  const handleCancel = () => {
    props.handleCancel?.()
  };

  return (
    <Modal title="Özelikler" open={props.isModalOpen} onCancel={ handleCancel} footer={null}>
      <List
        
        bordered
        dataSource={attributes?.ids?.map((id)=> {return {label : attributes.entities[id].attribute_name , value :attributes.entities[id].attribute_value }}) ?? []}
        renderItem={(item) => (
          <List.Item>
            <Title level={5} className="w-1/2">{item.label}</Title>
            <Typography.Text strong className="w-1/2 text-gray-700">: {item.value}</Typography.Text>
          </List.Item>
        )}
      />
    </Modal>
  );
}