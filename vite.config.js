import { resolve } from 'path';
module.exports = {
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:8000/',
      changeOrigin: true, // 允许跨域
    },
  },
  plugins: [],
  resolve: {
    alias: {
      Src: resolve(__dirname, 'src'),
    },
  },
};
