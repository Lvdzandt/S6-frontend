import axios from "axios";

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
        console.log("expense: " + data)
        return await apiClient
            .post("/", data)
            .then((response) => response.data);
    },
    async fetchAllSubreddits(){
        return await apiClient
            .get("/all")
            .then((response) => response.data);
    }
};