import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connetedDB from "./config/db.js";

import studentRoutes from "./router/Student.js";
import subjectRoutes from "./router/Subject.js";

dotenv.config();

connetedDB();

const app = express();

app.use(cors());
app.use(express.json());

// Student Routes
app.use("/api/students", studentRoutes);

// Subject Routes
app.use("/api/subjects", subjectRoutes);

app.get("/", (req, res) => {
    res.send("Student Management Server Running Successfully");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server Running on", port);
});