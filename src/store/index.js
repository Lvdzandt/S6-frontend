import Vuex from 'vuex'
import UserService from "@/services/UserService";
import SubredditService from "@/services/SubredditService";

export default new Vuex.Store({
    state: {
        todo: {},
        expense: {},
    },
    actions: {
        createUser(name) {
            console.log("name store: " + name)
            return UserService.postUser(name)
                .then((response) => {
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
        createSubreddit(name) {
            console.log("expense name: " + name)
            return SubredditService.postSubreddit(name)
                .then((response) => {
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
