import Vue from 'vue';
import firebase from 'firebase/compat/app';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: 'AIzaSyBhweqs1UmP9OxnvYc_pXt4Ttx_ZAYFet8',
  authDomain: 'innospace-v3.firebaseapp.com',
  projectId: 'innospace-v3',
  storageBucket: 'innospace-v3.appspot.com',
  messagingSenderId: '939967246852',
  appId: '1:939967246852:web:3383e1ea3193bb93207b51',
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount('#app');
