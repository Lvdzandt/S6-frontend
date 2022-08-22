import axios from "axios";
import { getToken } from '@baloise/vue-keycloak'


const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL+"subreddit",
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});


export default {
    async postSubreddit(data) {
        const token = await getToken();
        console.log("expense: " + data + " token: " + token);
        return await apiClient
            .post("/", data)
            .then((response) => response.data);
    },
    async fetchAllSubreddits(){
        const token = await getToken();
        console.log("token: " + token);
        return await apiClient
            .get("/all")
            .then((response) => response.data);
    }
};