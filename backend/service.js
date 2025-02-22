import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { sendEmail } from "./sendEmail.js";

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

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
