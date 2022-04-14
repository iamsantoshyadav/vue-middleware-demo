// ../vue-middleware-demo/src/router.js

import Vue from "vue";
import VueRouter from "vue-router";

import LoginPage from "@/pages/LoginPage.vue"
import UserProfile from "@/pages/UserProfile.vue"
import HelloWorld from "./components/HelloWorld"

// import guest from "./middleware/guest" // Change: Import Middleware
import auth from "./middleware/auth";
import middlewarePipeline from "./middleware/middleware-pipeline";
import guest from "./middleware/guest";

Vue.use(VueRouter)

const appRoutes = [
    {
        path: '/',
        name: 'home',
        component: HelloWorld
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/user-profile',
        name: 'user.profile',
        meta: {
            middleware: [
                auth, guest
            ]
        },
        component: UserProfile
    }
]

const routes = [...appRoutes]

const router = new VueRouter({
    mode: 'history',
    routes
})

router.beforeEach((to, from, next) => {

    /** Navigate to next if middleware is not applied */
    if (!to.meta.middleware) {
        return next()
    }

    const middleware = to.meta.middleware;
    const context = {
      to,
      from,
      next,
    //   store  | You can also pass store as an argument
    }

    return middleware[0]({
        ...context,
        next:middlewarePipeline(context, middleware,1)
    })
  })
export default router
