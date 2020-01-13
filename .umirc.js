// ref: https://umijs.org/config/
const pathName = './';

export default {
  base: pathName,
  publicPath: pathName,
  history: 'hash',
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: 'dotdot',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
