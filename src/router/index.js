import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/HomeView.vue"
import BoxConfig from "../components/BoxConfig.vue"
import Video from "../components/VideoView.vue"
import SystemConfig from "../components/SystemConfig.vue"
import Log from "../components/LogInfo.vue"

Vue.use(VueRouter)
// 创建路由组件，一个页面就是一个主键
// 将路由和组件映射
const routes = [
    // 主路由
    {
        path: '/',
        component: Home,
        redirect: '/boxConfig',
        children: [
            //子路由
            { path: '/video', component: Video },
            { path: '/boxConfig', component: BoxConfig },
            { path: '/systemConfig', component: SystemConfig},
            { path: '/log', component: Log}
        ]
    }
  ]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  
export default router  