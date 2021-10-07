// Default app
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import GlobalTransitions from './GlobalTransitions';
import jQuery from 'jquery';
import VueAnimateNumber from 'vue-animate-number';
import VueSweetalert2 from 'vue-sweetalert2';
window.$ = window.jQuery = jQuery;

import VueCountdownTimer from 'vuejs-countdown-timer';

//Styles and plugins
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueLettering from '@miii/vue-lettering';
Vue.component('font-awesome-icon', FontAwesomeIcon);

//Vue Use 

Vue.use(GlobalTransitions);
Vue.use(VueAnimateNumber);
Vue.use(VueSweetalert2);
Vue.use(VueCountdownTimer);
Vue.use(styles);
Vue.use(VueLettering);

// Import the functions you need from the SDKs you need


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
