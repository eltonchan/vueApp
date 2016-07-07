'use strict';

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import FastClick from 'fastclick'

require('./assets/scss/weui.css');
require('./assets/scss/common.css');

Vue.use(VueResource);
Vue.use(VueRouter);
//实例化VueRouter
let router = new VueRouter({
    hashbang: false,
    history: false
});

let app = Vue.extend({});

routerMap(router);

router.start(app, "#app");
