import express from "express"

const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "En mycket fin webbsida",
        message: "Webbserverprogrammering is now real!"
    })
});

router.get("/about", (req, res) => {
    res.render("about.njk", {
        title: "About",
        message: "Detta är ett skolarbete"
    })
})

router.get("/greeting", (req, res) => {
    // res.send(`HALLOJ I STUGAN ${req.query.name}! ${req.query.message}!`)
    // console.log(req.query.hey)

    res.render("greeting.njk", {
        title: "Hej!",
        message: `Hej, ${req.query.name}! ${req.query.message}! Med ovänliga hälsningar, ${req.query.name}`
    })
})

router.get("/trash", (req, res) => {
    res.render("trash.njk", {
        title: "Bunch of trash",
        message: req.query.message
    })
})

export default router