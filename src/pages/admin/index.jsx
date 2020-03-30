import React, { lazy, useState, Suspense } from 'react'
import { Layout, Row, Col } from 'antd'
import './index.less'
import styles from './index.module.css'
import SiderMenu from './menus/sider'
import SelectRole from './select/role'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PageSpin from '@src/components/pageSpin'


const { Header, Content, Footer, Sider } = Layout

const AdminRoot = () => {
  let { path } = useRouteMatch()

  const [moduleKey, setModuleKey] = useState('user-1')

  const onSiderMenuClick = ({ key }) => {
    setModuleKey(key)
  }

  return (
    <Layout>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className={styles.logo} />
        <SiderMenu onClick={onSiderMenuClick} activeModule={moduleKey} />
      </Sider>
      <Layout
        className="site-layout"
        style={{ marginLeft: 200, minHeight: '100vh' }}
      >
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <Row>
            <Col></Col>
            <Col span={12} style={{ textAlign: 'right' }}>
              <SelectRole />
            </Col>
          </Row>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: '80vh' }}
          >
            <Suspense fallback={<PageSpin />}>
              <Switch>
                <Route
                  path={`${path}/`}
                  component={lazy(() => import(`./modules/demo/${moduleKey}`))}
                ></Route>
              </Switch>
            </Suspense>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  )
}

export default AdminRoot
