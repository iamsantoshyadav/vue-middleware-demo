/* eslint-disable */
export default function auth({next,store}){
    let isLoggedIn =true;
    // let isLoggedIn = store.getters['sessionData/isLoggedIn']
    if(!isLoggedIn){
        return next({
            name:'login'
        })
    }

    return next()
}
