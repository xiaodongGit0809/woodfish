import { resolve } from 'path';
module.exports = {
  base: '/woodfish/',
  plugins: [],
  resolve: {
    alias: {
      Src: resolve(__dirname, 'src'),
    },
  },
};
