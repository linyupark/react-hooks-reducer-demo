
import Store from '@src/libs/useContextReducer';
import importJSON from '@src/libs/XHRjson';

// 只引入一次
let isImported = false;

/**
 * 从外部引入配置信息
 */
export default (url) => {
  const [, dispatch] = Store.Reducer();
  return () => {
    async function fetchExConfig() {
      if (!isImported) {
        const exConfig = await importJSON(url);
        dispatch({
          type: 'config.merge',
          data: exConfig
        });
        isImported = true;
      }
    }
    fetchExConfig();
  }
}