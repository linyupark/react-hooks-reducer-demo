import React from 'react'
import { Spin } from 'antd'
import container from '@src/asserts/styles/container.module.css'

const PageSpin = () => (
  <div className={container.flexCC}>
    <Spin size="large" />
  </div>
)

export default PageSpin
