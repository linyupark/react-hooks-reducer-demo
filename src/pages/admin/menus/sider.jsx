import React, { useState } from 'react'
import { Menu } from 'antd'
import { MailOutlined } from '@ant-design/icons'

const { SubMenu } = Menu

// 菜单功能key集合
const MenuKeys = ['module1', 'module2', 'module3']

const Sider = () => {
  // 打开的菜单key
  const [openKeys, setOpenKeys] = useState(['module1'])

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
      {MenuKeys.map((k, i) => (
        <SubMenu
          key={k}
          title={
            <span>
              <MailOutlined />
              <span>功能模块区 {i + 1}</span>
            </span>
          }
        >
          <Menu.Item key={`${k}-1`}>功能 1</Menu.Item>
          <Menu.Item key={`${k}-2`}>功能 2</Menu.Item>
        </SubMenu>
      ))}
    </Menu>
  )
}

export default Sider
