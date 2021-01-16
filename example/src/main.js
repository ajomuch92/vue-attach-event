import Vue from 'vue';
import App from './App.vue';

import 'vue-attach-event';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
