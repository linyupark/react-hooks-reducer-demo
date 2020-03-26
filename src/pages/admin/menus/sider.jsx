import React, { useState } from 'react'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import Context from '@src/libs/useContextReducer'
import { Link, useRouteMatch } from 'react-router-dom'

const { SubMenu } = Menu

const Sider = ({ onClick, activeModule }) => {
  let { url } = useRouteMatch()

  // 打开的菜单key
  const [openKeys, setOpenKeys] = useState([activeModule.split('-')[0]])

  const [{ config, auth }] = Context.Reducer()

  // 菜单折叠点击
  const onOpenChange = wantOpenKeys => {
    if (openKeys.length === 0) {
      return setOpenKeys(wantOpenKeys)
    }
    setOpenKeys(wantOpenKeys.filter(key => key !== openKeys[0]))
  }

  return (
    <Menu
      mode="inline"
      theme="dark"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      onClick={onClick}
      selectedKeys={[activeModule]}
    >
      {config.permissions[auth.role].map((menu, i) => (
        <SubMenu
          key={menu.key}
          title={
            <span>
              <MailOutlined />
              <span>{menu.text}</span>
            </span>
          }
        >
          <Menu.Item key={`${menu.key}-1`}>
            <Link to={`${url}/${menu.key}-1`}>子菜单 1</Link>
          </Menu.Item>
          <Menu.Item key={`${menu.key}-2`}>
            <Link to={`${url}/${menu.key}-2`}>子菜单 2</Link>
          </Menu.Item>
        </SubMenu>
      ))}
    </Menu>
  )
}

export default Sider
