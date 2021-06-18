import Vue from "vue"
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: "history",
    routes:[
        {path: "/", alias: "/home", name:"home", component:() => import("./components/Home.vue")},
        {path: "/dataset", alias: "/dataset", name:"dataSet", component:() => import("./components/Dataset.vue")},
        {path: "/dataset/kmeans", alias: "/kmeans", name:"kmeans", component:() => import("./components/KMeans.vue")}
    ]
})