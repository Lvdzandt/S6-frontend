import axios from "axios";

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL+"user",
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export default {
    async postUser(expense) {
        console.log("expense: " + expense)
        return await apiClient
            .post("/", expense)
            .then((response) => response.data);
    },
    async fetchUser(){
        return await apiClient
            .get("/")
            .then((response) => response.data);
    }
};