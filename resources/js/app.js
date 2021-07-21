
require('./bootstrap');
window.Vue = require('vue');


import App from './components/App.vue'

Vue.component('App', require('./components/App.vue').default);
Vue.component('mainHeader', require('./components/header/mainHeader.vue').default);
Vue.component('navbar', require('./components/parts/navbar.vue').default);
Vue.component('post', require('./components/pages/posts/index.vue').default);


const app = new Vue({
    el: '#app',
    render: h => h(App)
});