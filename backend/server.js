import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cluesRoutes from "./routes/cluesRoutes.js";

dotenv.config();

// Intializes express
const app = express();

app.use(express.json()); // Parses JSON
app.use(helmet()); // Helmet is a secure middle ware that set additional security headers
app.use(morgan("dev")); // Logs any requests 

// This connects the routes used by the API
app.use("/api/clues", cluesRoutes);


// This checks the .env file and uses it to broadcast the API on a sepcific port
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})