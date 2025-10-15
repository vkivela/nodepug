const express = require('express'); 
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.set('view engine', 'pug')

let customers = [
  {
    id: '1588323375416',
    firstname: 'joni',
    lastname: 'Johnson',
    email: 'john@johnson.com',
    phone: '8233243'
  },
  {  
    id: '1588323375417', 
    firstname: 'Mary',
    lastname: 'Smith',
    email: 'mary@smith.com', 
    phone: '6654113'
  },
  {
    id: '1588323375418',
    firstname: 'Peter',
    lastname: 'North', 
    email: 'peter@north.com',
    phone: '901176'
  },
]

app.get("/customers", (req, res) => {
  res.render("movielist", {movies: customers});
})

app.get("/addmovie", (req, res) => {
  res.render("addmovie");
})

app.post("/addmovie", (req, res) => {
  const newMovie = {id: new Date().now, firstname: req.body.firstname, lastname: req.body.lastname, email: req.body.email, phone: req.body.phone};
  movies = [...movies, newMovie];
  res.redirect("/movies");
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${port}.`);
});
