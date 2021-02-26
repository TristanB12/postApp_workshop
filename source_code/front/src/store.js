import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            username: 'NOT A USER',
        },
        isUserloggedIn: false
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            if (user)
                state.isUserloggedIn = true;
            else
                state.isUserloggedIn = false;
        }
    },
    actions: {
        setToken({commit}, token) {
            commit('setToken', token)
        },
        setUser({commit}, user) {
            commit('setUser', user)
        }
    },
    modules: {
    }
})