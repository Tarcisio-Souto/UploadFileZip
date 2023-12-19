require('./bootstrap');

import Vue from 'vue';

import UploadFiles from './components/UploadFiles.vue';
Vue.component('uploadfiles-component', UploadFiles);

import PrimeVue from 'primevue/config';
Vue.use(PrimeVue);

const app = new Vue({el: '#app'});