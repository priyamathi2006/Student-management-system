import axios from "axios";

const api = axios.create({
    // CRITICAL FIX: Adding /api here fixes the 404 error across the entire app!
    baseURL: "http://localhost:5000/api", 
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;