import { Button, Form, Input, InputNumber, Select } from "antd";
import React, { useState } from "react";
import openNotificationWithIcon from "../../components/animations";

export default function AddProduct() {
  const [url, setUrl] = useState("");
  const arrPros = JSON.parse(localStorage.getItem("products"));
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
    required: "${label} is required!",
    types: {
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const arrType = JSON.parse(localStorage.getItem("typeProds"));

  const onChange = (e) => {
    let files = e.target.files;
    if (files[0].size < 1000000) {
      let reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        setUrl(e.target.result);
      };
    } else {
      openNotificationWithIcon("warning", "Please choose image size < 1MB");
    }
  };

  const onFinish = (values) => {
    const id = Math.floor(Math.random() * 1000);
    arrPros.push({ ...values, id, url });
    localStorage.setItem("products", JSON.stringify(arrPros));
    openNotificationWithIcon("success", "Add Product");
  };

  return (
    <div className="add-product">
      <h1 className="title-page">Add Product</h1>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["name"]}
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
          name={["type"]}
          label="Type"
          rules={[
            {
              type: "text",
              required: true,
            },
          ]}
        >
          <Select
            label="Name"
            showSearch
            className="ant-form-item-control-input-content"
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            {arrType.map((item) => {
              return <Select.Option key={item.type}>{item.type}</Select.Option>;
            })}
          </Select>
        </Form.Item>
        <Form.Item
          name={["num"]}
          label="Num"
          className="ant-form-item-control-input-content"
          rules={[
            {
              type: "number",
              min: 1,
              max: 10000,
              required: true,
            },
          ]}
        >
          <InputNumber className="ant-input" />
        </Form.Item>
        <Form.Item
          name={["price"]}
          label="Price"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["des"]} label="Descriptions">
          <Input.TextArea />
        </Form.Item>
        <div className="ant-row ant-form-item">
          <label className="ant-col ant-col-8 ant-form-item-label img-file">
            Image :
          </label>
          <input
            className="ant-col ant-col-8 ant-form-item-control"
            type="file"
            name="file"
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}