import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const app = createApp(App)

app.use(PrimeVue);
app.component('Button', Button)
app.component('InputText', InputText)

app.use(router)

app.mount('#app')
