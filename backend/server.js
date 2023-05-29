import express from "express";
import dontenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

dontenv.config();

const port = process.env.PORT || 5000; // Run under this line...

connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("API running"));

app.listen(port, () => console.log(`Server started on port ${port}`));

//error
app.use(notFound);
app.use(errorHandler);
