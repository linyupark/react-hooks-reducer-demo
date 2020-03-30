import { useRequest } from '@umijs/hooks';
import { createModel } from 'hox'
import { useState } from 'react'
import Store from '@src/stores';

function useConfig() {

  const [config, setConfig] = useState(Store.config)

  const { run, loading } = useRequest('/config.json', {
    manual: true,
    cacheKey: 'AppExConfig'
  })

  const loadExConfig = () => {
    run().then(data => {
      setConfig({
        ...config,
        ...data
      });
    })
  }

  return {
    config,
    loadExConfig,
    loading
  }
}

export default createModel(useConfig);