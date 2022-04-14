// ../vue-middleware-demo/src/middleware/guest.js
/* eslint-disable */
export default function guest({next,store}){
    let isLoggedIn = true // Can be calculated through store
    // let isLoggedIn = store.getters['sessionData/isLoggedIn']
    if(isLoggedIn){
        return next({
            name: 'home'
        })
    }

    return next();
}
