import {
  AlignLeftOutlined, AppstoreOutlined, PlusSquareOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import "antd/dist/antd.css";
import Sider from "antd/lib/layout/Sider";
import React from "react";
import { NavLink } from "react-router-dom";

export default function SiteBarCP() {
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem(<NavLink to="/home">Products List</NavLink>, 'product', <AlignLeftOutlined />),
    getItem('Actions', 'actions', <AppstoreOutlined />, [
      getItem(<NavLink to="/home/add">Add Product</NavLink>, 'actions-item',<PlusSquareOutlined />),
    ]),
  ];

  return (
    <Sider width={200} className="site-layout-background">
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["product"]}
        defaultOpenKeys={["product"]}
        className="menu-site-bar"
        items={items}
      />
    </Sider>
  );
}
