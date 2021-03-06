import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';

Vue.use(VueApollo);

// // Setup ApolloClient 
const defaultClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

const apolloProvider = new VueApollo({defaultClient}); 

Vue.config.productionTip = false

new Vue({
  apolloProvider,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
