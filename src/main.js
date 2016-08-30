'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueTouch from 'vue-touch';
import routerMap from './routers';
import FastClick from 'fastclick';
require('./assets/scss/reset.css');
require('./assets/scss/style.css');

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VueTouch);
//实例化VueRouter
let router = new VueRouter({
    hashbang: false,
    history: false
});

Vue.component('nv-head', require('./components/head.vue')); // 注册全局头部

let app = Vue.extend({});

routerMap(router);

router.start(app, "#app");
