import Vue from 'vue';
import VueRouter from 'vue-router';
import homeContainer from "./templates/tabbar/homeContainer.vue";
import findContainer from "./templates/tabbar/findContainer.vue";
import messageContainer from "./templates/tabbar/messageContainer.vue";
import userContainer from "./templates/tabbar/userContainer.vue";
import homeToChilden1 from "./templates/homechildens/homeToChilden1.vue";
import homeToChilden2 from "./templates/homechildens/homeToChilden2.vue";
import findToChilden1 from "./templates/findchildens/findToChilden1.vue";
import findToChilden2 from "./templates/findchildens/findToChilden2.vue";
import findToChilden3 from "./templates/findchildens/findToChilden3.vue";
import childen2To1 from "./templates/findchildens/findtochilden2/childen2To1.vue";
import childen2To2 from "./templates/findchildens/findtochilden2/childen2To2.vue";
import childen2To3 from "./templates/findchildens/findtochilden2/childen2To3.vue";
import childen2To4 from "./templates/findchildens/findtochilden2/childen2To4.vue";

Vue.use(VueRouter);

var router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', redirect: '/home/home1'},
        {
            path: '/home',
            component: homeContainer,
            children: [
                {path: 'home1', component: homeToChilden1},
                {path: 'home2', component: homeToChilden2},
            ]
        },
        {
            path: '/find',
            component: findContainer,
            children: [
                {path: 'find1', component: findToChilden1},
                {
                    path: 'find2',
                    component: findToChilden2,
                    children: [
                        {path: 'page1', component: childen2To1},
                        {path: 'page2', component: childen2To2},
                        {path: 'page3', component: childen2To3},
                        {path: 'page4', component: childen2To4}
                    ]
                },
                {path: 'find3', component: findToChilden3}
            ]
        },
        {path: '/message', component: messageContainer},
        {path: '/user', component: userContainer},


    ]
});
export default router