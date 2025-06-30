import express from "express"
import  dotenv from "dotenv"
import contactRoutes from "./routes/contactRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import errorHander from "./middleware/errorHandler.js";
import connectDatabase from "./config/connect.js";



dotenv.config();

const app = express();
connectDatabase()
const port = process.env.PORT  ||  5000;

app.use(express.json());
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes)
app.use(errorHander);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})