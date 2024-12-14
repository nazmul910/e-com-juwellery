import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

const app = createApp(App)

onMounted(() => {
    initFlowbite();
})
app.use(router)

app.mount('#app')
