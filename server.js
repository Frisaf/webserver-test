import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("Hello TE23 välkomna :D")
});

app.get("/about", (req, res) => {
    res.json({
        "message": "Blubb"
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})