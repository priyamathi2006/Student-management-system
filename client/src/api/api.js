import axios from "axios";

const getBaseURL = () => {
    // If running in development (local machine or local Wi-Fi on phone)
    if (import.meta.env.DEV) {
        const hostname = window.location.hostname; // Automatically gets laptop IP (e.g., 192.168.x.x) or localhost
        return `http://${hostname}:5000/api`;
    }
    // For deployed production (Vercel)
    return import.meta.env.VITE_API_URL || "http://localhost:5000/api";
};

const api = axios.create({
    baseURL: getBaseURL(), 
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;