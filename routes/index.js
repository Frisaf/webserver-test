import express from "express"
import fs from "fs"

const router = express.Router()

router.get("/", (req, res) => {
    res.render("index.njk", {
        title: "En Mycket Fin Webbsida",
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
        title: "A Bunch of Trash",
        message: req.query.message
    })
})

const {movies} = JSON.parse(fs.readFileSync("./data/movies.json"))

router.get("/movies", (req, res) => {
    res.render("movies.njk", {
        title: "Movies",
        movies
    })
})

router.get("/movies/:id", (req, res) => {
    const movie = movies.find(m => m.id === +req.params.id)

    if (movie) {
        res.render("movie.njk", {
            title: movie.title,
            movie
        })
    } else {
        res.status(404).json({error: "Movie not found"})
    }
})

router.get("/search", (req, res) => {
    const query = req.query.q
    const results = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()))

    res.render("results.njk", {
            title: "Search results",
            results,
            query
        })
})

router.post("/movies", (req, res) => {
    const title = req.body.title
    const year = req.body.year
    const rating = `${req.body.rating}/10`
    const review = req.body.review
    const language = req.body.language
    const genre = req.body.genre
    const id = movies.length + 1
    const movie = { id, title, year, language, rating, review, genre }

    movies.push(movie)
    
    res.redirect("/movies")
})

export default router