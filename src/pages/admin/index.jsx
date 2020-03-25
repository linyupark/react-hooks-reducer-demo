import React, {  } from 'react';
import { Layout } from 'antd';
import './index.less';
import styles from './index.module.css';
import SiderMenu from './menus/sider';
const { Header, Content, Footer, Sider } = Layout;


const AdminRoot = () => {

  return <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className={styles.logo} />
      <SiderMenu />
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200, minHeight: '100vh' }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: '80vh' }}>
          hello<br></br>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
}

export default AdminRoot;