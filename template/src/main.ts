import Vue from 'vue';
import App from '@/App.vue';

Vue.config.productionTip = false;

// Styles
import '@/styles/main.css';

new Vue({
	el: '#app',
	render: h => h(App)
});
