import express from "express";
import nunjucks from "nunjucks"

const app = express()

app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.get("/", (req, res) => {
    res.render("index.njk", {
        title: "blub glub",
        message: "nyehehehehehehehehehehehehehehehe"
    })
});

app.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "About",
        message: "Detta är ett skolarbete"
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})