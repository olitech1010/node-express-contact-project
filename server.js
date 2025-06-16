import express from "express"
import  dotenv from "dotenv"
import contactRoutes from "./routes/contactRoutes.js";


dotenv.config();

const app = express();

const port = process.env.PORT  ||  5000;

app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})