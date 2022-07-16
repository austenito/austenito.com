// import { Vue } from 'vue';
// import WineRegion from './components/WineRegion';
//
// Vue.component('wine-region', WineRegion);
//
// new Vue({}).$mount('#app');

import { createApp } from 'vue'
import WineRegion from './components/WineRegion';

const app = createApp(WineRegion)
app.mount('#app')
