import Vuex from 'vuex'
import UserService from "@/services/UserService";
import SubredditService from "@/services/SubredditService";

export default new Vuex.Store({
    state: {
        subreddit: {},
        user: {},
    },
    mutations: {
        SET_SUBREDDIT(state, subreddit){
            state.subreddit = subreddit;
        },
        SET_USER(state, user){
            state.user = user;
        }
    },
    actions: {
        createUser({commit}, name) {
            console.log("name store: " + name)
            return UserService.postUser(name)
                .then((response) => {
                    commit("SET_USER", response)
                    return response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        fetchUser() {
            return UserService.fetchUser().then(
                (response) => {
                    return response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        createSubreddit({commit}, name) {
            console.log("expense name: " + name)
            return SubredditService.postSubreddit(name)
                .then((response) => {
                    commit("SET_SUBREDDIT", response)
                    return response;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        fetchAllSubreddits() {
            return SubredditService.fetchAllSubreddits().then(
                (response) => {
                    return response;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    modules: {
    }
})
