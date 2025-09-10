import express from "express";
import nunjucks from "nunjucks"
import morgan from "morgan"

const app = express()

app.use(morgan("dev"))
app.use(express.static("public"))

nunjucks.configure("views", {
    autoescape: true,
    express: app
})

app.get("/", (req, res) => {
    res.render("index.njk", {
        title: "En mycket fin webbsida",
        message: "Webbserverprogrammering is now real!"
    })
});

app.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "About",
        message: "Detta är ett skolarbete"
    })
})

app.get("/greeting", (req, res) => {
    // res.send(`HALLOJ I STUGAN ${req.query.name}! ${req.query.message}!`)
    // console.log(req.query.hey)

    res.render("greeting.njk", {
        title: "Hej!",
        message: `Hej, ${req.query.name}! ${req.query.message}! Med ovänliga hälsningar, ${req.query.name}`
    })
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000")
})