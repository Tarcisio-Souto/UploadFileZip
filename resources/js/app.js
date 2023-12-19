require('./bootstrap');

import Vue from 'vue';
import UploadFiles from './components/UploadFiles.vue';

Vue.component('uploadfiles-component', UploadFiles);

const app = new Vue({el: '#app'});