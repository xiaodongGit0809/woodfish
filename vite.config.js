module.exports = {
  base: '.',
  plugins: [],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    resolve: {
      alias: {
        Src: resolve(__dirname, 'src'),
      },
    },
  },
};
