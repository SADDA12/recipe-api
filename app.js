import express from "express";
import dotenv from "dotenv";
import { recipesRouter } from "./routes/recipes.routes.js";
import mongoose from "mongoose";
import cors from "cors";


dotenv.config();

const PORT = process.env.PORT
const app = express();

// apply middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cors())
// Use routes
app.use('/recipes', recipesRouter)

// Make database connection
await mongoose.connect(process.env.MONGO_URI);

// Listen for incoming requuests
app.listen(PORT, () => {
console.log(`Recipe api is running on ${PORT}`)
})