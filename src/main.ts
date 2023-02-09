import { createApp } from 'vue'
import App from './App.vue'
import UI from '../packages'

const app = createApp(App);
app.use(UI)

app.mount('#app')
