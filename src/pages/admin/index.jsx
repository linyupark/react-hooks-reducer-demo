import React, {  } from 'react';
import { Layout, Menu } from 'antd';
import './index.less';
import styles from './index.module.css';
import SWRDemo from './swr';

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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <span className="nav-text">nav 1</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24 }}>
          <SWRDemo />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
}

export default AdminRoot;