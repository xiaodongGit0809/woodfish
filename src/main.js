import { createApp } from 'vue';
import router from './router';
import store from './store';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ECharts from 'vue-echarts';
import 'echarts';
import App from './App.vue';
import './index.css';

import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

createApp(App)
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .use(ElementPlus)
  .component('ECharts', ECharts)
  .mount('#app');

axios.defaults.baseURL = 'https://xiaodonggit0809.github.io/';
