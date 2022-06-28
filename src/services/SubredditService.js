import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://gateway-service/subreddit",
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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