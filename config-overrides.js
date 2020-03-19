const { override, fixBabelImports, addLessLoader, addWebpackPlugin, addWebpackAlias } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const path = require('path');

// 添加私人包
const addPrivatePkg = () => config => {
  config.module.rules[1].include = [
    path.resolve(__dirname, 'node_modules/@linyupark'),
    path.resolve(__dirname, 'src'),
  ];
  // console.log(config);
  return config;
};

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {},
    }),
    addWebpackPlugin(new AntdDayjsWebpackPlugin()),
    addWebpackAlias({
      '@src': path.resolve(__dirname, 'src')
    }),
    addPrivatePkg()
  )
};