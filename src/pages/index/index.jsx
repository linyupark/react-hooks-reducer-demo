import React, { useEffect } from 'react';
import {  } from 'react-router-dom';
import { useContextState } from '@src/libs/useCHState';
import importJSON from '@src/libs/XHRjson';

const IndexPage = () => {

  const [{ config }, dispatch] = useContextState();

  useEffect(() => {
    async function fetchExConfig() {
      const exConfig = await importJSON('/config.json');
      dispatch({
        type: 'config.merge',
        data: exConfig
      });
    }
    fetchExConfig();
  }, [dispatch]);

  return <h1>Hello: {config.api || ''}</h1>

}

export default IndexPage;