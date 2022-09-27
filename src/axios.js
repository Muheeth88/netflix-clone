import axios from "axios";

// Base URL
const http = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default http
