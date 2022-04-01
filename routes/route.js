
const process = require("process")
const express = require("express")
const router = express.Router()
const app = express()
const fetch = require("node-fetch")
const { response } = require("express")
require('dotenv').config()

//Home Page route
router.get("/", function (req, res) {
  fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.API_KEY}&language=nl-NL&page=1`)
  .then(response => response.json())
  .then( (popular) => {
    const results = {movies: popular.results};
    res.render('pages/index', {
      title: 'Movies overview',
      results
    })
  })
})

// Route for a single movie with an id
  router.get('/movies/:id', (req, res) => {
        fetch(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}`)
        .then(response => response.json())
        .then((movie) => {
          const results = {single_movie: movie};
           res.render('pages/single_product_page.ejs', {
            title: 'single product page',
            results
        })
    })
})


router.get('/offline', (req, res) => {
	res.render('pages/offline', {
		title: '404 Not Found',
	});
});

// Search route for when the user searched for a movie or tv show string
// app.get('/search', (req, res) => {
//   fetch(`https://api.themoviedb.org/3/movie?query=${req.query.searchMovie}?api_key=${process.env.API_KEY}`)
//   .then(async response => { 
//     const movieData = await  response.json()
//     console.log("mijn movie data is: ", movieData)
    
//     res.render('pages/searchResults', {
//     title: req.query.searchMovie,
//     movieData 
//   })
        
//     })
//   })

 
//route for 404 page
router.get("*", function (req, res) {
    res.render("pages/404", {
      title: "404 Page",
    });
  });


module.exports = router;
