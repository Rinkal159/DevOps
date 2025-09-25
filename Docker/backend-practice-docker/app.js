import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Hello world kiddos!"
    })
});

app.post("/data", (req, res) => {
    const { name } = req.body;

    res.json({
        message: `Hello ${name}, Welcome to the docker world.`
    });
})

const port = process.env.PORT || 8008;

app.listen(port, () => {
    console.log("Server success");
})