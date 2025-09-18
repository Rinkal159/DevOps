import express from "express";
import sum from "./Utils/sum.js";

const app = express();

app.get("/welcome/:a/:b", async (req, res) => {
    const { a, b } = req.params;

    res.json({
        message: `Sum of ${a} and ${b} is ${sum(Number(a), Number(b))}`
    })
})

app.listen(process.env.PORT || 3030, () => {
    console.log(("Server success"));
})