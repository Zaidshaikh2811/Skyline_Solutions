import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { sendEmail, sendTaskEmail } from "./sendEmail.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Email Route
app.post("/send-email", async (req, res) => {
    try {


        const response = await sendEmail(req.body);
        res.status(200).json({ message: "Email sent successfully", info: response });
    } catch (error) {
        res.status(500).json({ message: "Error sending email", error: error.message });
    }
});


app.post("/task-email", async (req, res) => {
    try {
        const { name, email, company, service, message } = req.body;

        // Validate required fields
        if (!name || !email || !service || !message) {
            return res.status(400).json({
                message: "Missing required fields"
            });
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                message: "Invalid email format"
            });
        }

        const response = await sendTaskEmail(req.body);
        res.status(200).json({
            message: "Email sent successfully",
            info: response
        });
    } catch (error) {
        console.error('Email sending error:', error);
        res.status(500).json({
            message: "Error sending email",
            error: error.message
        });
    }
});


// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
