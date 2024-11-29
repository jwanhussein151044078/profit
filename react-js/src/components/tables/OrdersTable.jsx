import React from 'react';
import { Table, Tag } from 'antd';
import { selectAllOrders, useGetOrdersQuery, useGetOrdersTotalNumberQuery } from '../../features/ordersSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getAppSettings, onChangeTablePage } from '../../features/appSettingSlice';

export function OrdersTable(props){
  const settings = useSelector(getAppSettings);
  const dispatch = useDispatch();
  const { isLoading, isError, error } = useGetOrdersQuery(settings);
  const orders = useSelector(state => selectAllOrders(state, settings));
  const { data: totalOrders } = useGetOrdersTotalNumberQuery();
  const columns = [
    {
      title: 'Müşteri',
      width: 150,
      dataIndex: 'company_name',
      key: 'company_name',
      fixed: 'left',
    },
    {
      title: 'Fatura Numarası',
      width: 150,
      dataIndex: 'invoice_number',
      key: 'invoice_number',
    },
    {
      title: 'Toplam Miktar',
      dataIndex: 'quantity',
      key: 'quantity',
      width: 150,
    },
    {
      title: 'Toplam Tutar',
      dataIndex: 'sub_total',
      key: 'sub_total',
      width: 150,
      fixed: 'left',
    },
    {
      title: 'Toplam Maliyet',
      dataIndex: 'total_cost',
      key: 'total_cost',
      width: 150,
    },
    {
      title: 'Toplam Karlılık',
      dataIndex: 'total_profit',
      key: 'total_profit',
      width: 150,
      render: (total_profit) =>{ 
        let total = parseFloat(total_profit);
        return <Tag color={total > 0 ? "green" : total == 0 ? "lightgray" : "red"}>
          {total_profit}
        </Tag>
      }, 
    }
  ];
  
  return (
    <div className='h-full w-full'>
      <Table
        rowHoverable
        rowClassName = {"font-medium"}
        className={"h-full"}
        size='small'
        columns={columns}
        dataSource={orders}
        scroll={{
          x: '100%',
          y: `calc(100vh - 300px)` 
        }}
        loading = {isLoading}
        pagination ={{
          total    : totalOrders?.data,
          current  : settings.page,
          pageSize : settings.pageSize,
          onChange : (page,pageSize) => dispatch(onChangeTablePage({page,pageSize})),
          pageSizeOptions : [10,15,20,25],
          showSizeChanger : true,
        }}
      />
    </div>
  );
};