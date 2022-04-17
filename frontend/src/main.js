import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import AutoComplete from "primevue/autocomplete";


const app = createApp(App)

app.use(PrimeVue);
app.component('Button', Button)
app.component('InputText', InputText)
app.component("AutoComplete", AutoComplete);

app.use(router)

app.mount('#app')
