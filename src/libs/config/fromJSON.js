/**
 * 从外部json来配置项目
 */

export default (url, mergeData = {}) => {

  return new Promise((resolve, reject) => {
    const onLoad = function () {
      try {
        resolve({ ...mergeData, ...JSON.parse(this.responseText) });
      }
      catch {
        reject({
          error: '配置文件格式错误'
        });
      }
    };
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load', onLoad);
    xhr.onerror = () => {
      reject({
        error: '配置文件请求失败'
      });
    };
    xhr.open('GET', url);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send();
  });
};