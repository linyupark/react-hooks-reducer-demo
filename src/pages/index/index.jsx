import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import importConfig from '@src/effects/importConfig'
import Context from '@src/libs/useContextReducer'

const IndexPage = () => {
  const [{ config }] = Context.Reducer()

  useEffect(importConfig('/config.json'), [])

  return <div>
    <p>{JSON.stringify(config)}</p>
    <Link to={`/login`}>登录</Link>
  </div>
}

export default IndexPage
