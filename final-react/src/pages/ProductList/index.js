import { Space, Table } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductsL() {
  const dataPros = JSON.parse(localStorage.getItem("products"));
  const dataSource = dataPros.map((item, index) => {
    return(item = {...item,key: item.id, no: index + 1})
  })
  
  const columns = [
    {
      title: 'No',
      dataIndex: 'no',
      key: 'no',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Num',
      dataIndex: 'num',
      key: 'num',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Action',
    key: 'action',
    render: (record) => (
      <Space size="middle">
        <Link to='/'>Invite {record.name}</Link>
        <a>Delete</a>
      </Space>
    )
    },
  ];
  
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}
