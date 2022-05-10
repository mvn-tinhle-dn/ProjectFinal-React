import { Button, Form, Input, InputNumber, Select } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';

export default function AddProduct() {
  const arrPros = JSON.parse(localStorage.getItem("products"));
  const onFinish = (values) => {
    const id = Math.floor(Math.random() * 1000)
    arrPros.push({ ...values, id })
    localStorage.setItem("products", JSON.stringify(arrPros))
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  const arrType = [
    {
      id: 1,
      type: "Lọc Nuớc"
    },
    {
      id: 2,
      type: "Đèn"
    },
    {
      id: 3,
      type: "TIểu Cảnh"
    },
  ]

  return (
    <div>
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          name={['name']}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={['type']}
          label="Type"
          rules={[
            {
              type: 'text',
              required: true,
            },
          ]}
        >
          <Select
            label="Name"
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
          >
            {arrType.map(item => {
              return (
                <Select.Option key={item.id} >{item.type}</Select.Option>
              )

            })}
          </Select>
        </Form.Item>
        <Form.Item
          name={['num']}
          label="Num"
          rules={[
            {
              type: 'number',
              min: 1,
              max: 10000,
              required: true,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item
          name={['price']}
          label="Price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={['des']} label="Descriptions">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
