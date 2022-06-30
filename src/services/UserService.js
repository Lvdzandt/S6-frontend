import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:9080/user",
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
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