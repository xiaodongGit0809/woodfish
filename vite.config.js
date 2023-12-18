import { resolve } from 'path';
module.exports = {
  base: '.',
  plugins: [],
  resolve: {
    alias: {
      Src: resolve(__dirname, 'src'),
    },
  },
};
