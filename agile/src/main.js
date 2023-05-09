import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import mixins from './mixins'
import axios from 'axios'

// createApp(App).use(router).mixin(mixins).mount('#app')
const app = createApp(App);
app.use(router);
// axios.defaults.baseURL = "http://localhost:8080"
app.config.globalProperties.axios = axios;
app.mount('#app');