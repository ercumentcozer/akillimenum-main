import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
import Vuelidate from 'vuelidate'
import ScrollAnimation from '../directives/scrollanimation'
Vue.directive('scrollanimation', ScrollAnimation)
Vue.use(Vuelidate)
Vue.use(VueCarousel);
Vue.config.productionTip = false

new Vue({
    router,
    render: function(h) { return h(App) }
}).$mount('#app')