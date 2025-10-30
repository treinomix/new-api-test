import express, { type Response } from "express"
import dotenv from "dotenv"

dotenv.config();

const app = express();

app.get("/", (req, res: Response) => {
    return res.status(200).send("Alright!");
});

if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log("Server running on PORT ", PORT);
    });
}

// for vercel deploy
export default app;