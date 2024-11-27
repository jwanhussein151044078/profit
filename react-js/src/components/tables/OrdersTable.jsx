import React from 'react';
import { Table } from 'antd';


const dataSource = Array.from({
  length: 100,
}).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  age: 32,
  address: `London, Park Lane no. ${i}`,
}));

export function OrdersTable(props){

  const columns = [
    {
      title: 'Müşteri',
      width: 150,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Fatura Numarası',
      width: 100,
      dataIndex: 'age',
      key: 'age',
      //fixed: 'left',
    },
    {
      title: 'Toplam Miktar',
      dataIndex: 'address',
      key: '1',
      width: 150,
    },
    {
      title: 'Toplam Tutar',
      dataIndex: 'address',
      key: '2',
      width: 150,
      fixed: 'left',
    },
    {
      title: 'Toplam Maliyet',
      dataIndex: 'address',
      key: '3',
      width: 150,
    },
    {
      title: 'Toplam Karlılık',
      dataIndex: 'address',
      key: '4',
      width: 150,
    }
  ];
  
  return (
    <div className='h-full w-full'>
      <Table
        className={"h-full "}
        columns={columns}
        dataSource={dataSource}
        scroll={{
          x: '100%',
          y: `calc(100vh - 300px)` 
        }}
        pagination ={{
          current  : 2,
          pageSize : 15,
          onChange : (page,pageSize) => console.log(page,pageSize)
        }}
      />
    </div>
  );
};