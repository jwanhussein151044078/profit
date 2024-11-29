import React, { useMemo } from 'react';
import { Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getAppSettings, onChangeTablePage } from '../../features/appSettingSlice';
import { selectAllProducts, useGetProductsQuery, useGetProductTotalNumberQuery } from '../../features/productSlice';

export function ProductsTable(props){
  const settings = useSelector(getAppSettings);
  const dispatch = useDispatch();
  const { isLoading , isFetching } = useGetProductsQuery(settings);
  const products = useSelector(state => selectAllProducts(state, settings));
  const { data: totalProducts } = useGetProductTotalNumberQuery();
  const columns = useMemo(()=>{
    return [
      {
        title: 'Ürün',
        width: 150,
        dataIndex: 'product_name',
        key: 'product_name',
        fixed: 'left',
        render: (total_profit) =>{ 
          return <Tag color={"purple"}>
            {total_profit}
          </Tag>
        }, 
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
  },[]);
  
  return (
    <div className='h-full w-full'>
      <Table
        rowHoverable
        rowClassName = {"font-medium"}
        size='small'
        className={"h-full"}
        columns={columns}
        dataSource={products}
        scroll={{
          x: '100%',
          y: `calc(100vh - 300px)` 
        }}
        loading = {isFetching || isLoading}
        pagination ={{
          total    : totalProducts?.data,
          current  : settings.page,
          pageSize : settings.pageSize,
          onChange : (page,pageSize) => dispatch(onChangeTablePage({page,pageSize})),
          pageSizeOptions : [10,15,20,25],
          showSizeChanger : true,
        }}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {console.log(record,rowIndex)}
          };
        }}
      />
    </div>
  );
};