import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express();

const port = process.env.PORT  ||  5000;

app.use(express.json())

app.get("/api/contacts", (req, res) => {
    res.status(200).json({
        message: "Get all contacts"
    });
    
});

app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
})