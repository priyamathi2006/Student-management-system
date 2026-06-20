import mongoose from "mongoose";

const connetedDB = async () => {
    try {
        // Safely check if the URI variable exists before attempting connection
        if (!process.env.MONGO_URI) {
            throw new Error("Your .env file is missing or MONGO_URI is not defined inside it!");
        }

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected Safely to: ${conn.connection.host}`);
    } catch (error) {
        console.error("CRITICAL CONFIG ERROR: Database failed to initialize.");
        console.error(error.message);
        // Soft exit to protect the node terminal instance from locking up
        process.exit(1); 
    }
};

export default connetedDB;