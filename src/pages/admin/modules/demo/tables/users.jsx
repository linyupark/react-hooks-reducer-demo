import React, { useEffect } from 'react'
import { request } from 'graphql-request'
import useSWR from 'swr'
import { Table } from 'antd'
import Context from '@src/libs/useContextReducer'

const TableUsersDemo = () => {
  const [{ config }] = Context.Reducer()

  const { data, error } = useSWR(
    `
    {
      playerList {
        key: id
        firstName
        lastName
        gender
        mobile
      }
    }
  `,
    query => request(config.api, query),
  )

  useEffect(() => {}, [data])

  if (error) return <div>接口数据错误</div>
  return (
    <Table
      loading={!data}
      dataSource={data && data.playerList}
      columns={[
        {
          title: '姓名',
          dataIndex: 'firstName',
          render: (v, rec) => `${rec.lastName}${v}`,
        },
        {
          title: '性别',
          dataIndex: 'gender',
        },
        {
          title: '联系号码',
          dataIndex: 'mobile',
        },
      ]}
      scroll={{ y: 440 }}
    ></Table>
  )
}

export default TableUsersDemo
