import { createApp } from 'vue';
import router from './router';
import store from './store';
import ECharts from 'vue-echarts';
import 'echarts';
import App from './App.vue';
import './index.css';

import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

createApp(App)
  .use(router)
  .use(store)
  .use(ElementPlus)
  .component('ECharts', ECharts)
  .mount('#app');
