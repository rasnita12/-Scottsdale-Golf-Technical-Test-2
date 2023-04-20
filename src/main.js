import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'
import './assets/main.css'

// tailwind plugin
import 'flowbite';

//package for icon
import VueFeather from 'vue-feather'

// package for tooltip
import {TippyPlugin} from 'tippy.vue';
import 'tippy.js/dist/tippy.css';

const app = createApp(App)

app.use(router)

app.use(TippyPlugin, {
  tippyDefaults: {},
});
app.use(TippyPlugin);

app.component('vue-feather', VueFeather)

app.mount('#app')
