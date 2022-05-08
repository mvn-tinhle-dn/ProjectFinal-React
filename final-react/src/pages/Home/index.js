import BreadcrumbCP from '../../components/layouts/Breadcrumb';
import SiteBarCP from '../../components/layouts/SiteBar';
import FooterCP from '../../components/layouts/Footer';
import HeaderCP from '../../components/layouts/Header';
import { Content } from 'antd/lib/layout/layout';
import { Layout } from 'antd';
import 'antd/dist/antd.css';



function Home() {
  return (
    <Layout>
      <HeaderCP />
      <Layout className='home-main'>
        <SiteBarCP />
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
          <BreadcrumbCP />
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
      <FooterCP />
    </Layout>
  );
}

export default Home;
