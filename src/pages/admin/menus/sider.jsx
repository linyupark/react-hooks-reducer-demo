import React, { useState } from 'react'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'
import Context from '@src/libs/useContextReducer'

const { SubMenu } = Menu

const Sider = () => {
  // 打开的菜单key
  const [openKeys, setOpenKeys] = useState([])

  const [{ config, auth }] = Context.Reducer()

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
          <Menu.Item key={`${menu.key}-1`}>子菜单 1</Menu.Item>
          <Menu.Item key={`${menu.key}-2`}>子菜单 2</Menu.Item>
        </SubMenu>
      ))}
    </Menu>
  )
}

export default Sider
