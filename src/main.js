import Vue from 'vue'
import app from './App.vue'
import './usevant.js'
import router from "./router.js";

var vm = new Vue({
    el: '#app',
    data: {},
    render: (c) => {
        return c(app)
    },
    router,
})