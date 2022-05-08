import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';


export default function BreadcrumbCP() {
  return (
    <Breadcrumb
      style={{
        margin: '16px 0',
      }}
    >
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  )
}
