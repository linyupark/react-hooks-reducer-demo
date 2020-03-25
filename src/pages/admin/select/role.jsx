import React from 'react'
import { Select } from 'antd'
import Context from '@src/libs/useContextReducer'

const { Option } = Select

const SelectRole = () => {
  const [{ config, auth }, dispatch] = Context.Reducer()

  // 改变身份
  const onChange = (data) => {
    dispatch({
      type: 'auth.role',
      data
    })

    if (data === 'guest') {
      dispatch({
        type: 'auth.logout',
        data
      })
    }
  }

  return (
    <Select value={auth.role} style={{ width: 120 }} bordered={false} onChange={onChange}>
      {config.roles.map(role => (
        <Option value={role.key} key={role.key}>
          {role.text}
        </Option>
      ))}
    </Select>
  )
}

export default SelectRole
