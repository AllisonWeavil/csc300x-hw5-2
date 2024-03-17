"use strict";
const express = require("express");
const app = express();

app.use(express.static("public"));


// for application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); // built-in middleware
// for application/json
app.use(express.json()); // built-in middleware

const multer = require("multer");
// for multipart/form-data (required with FormData)
app.use(multer().none()); // requires the "multer" module


app.get("/", function (req, res) {
    res.send("Hello, World from Express!");
});



let categories = ['funnyJoke', 'lameJoke'];



let funnyJoke = [
{
joke: 'Why did the student eat his homework?',
response: 'Because the teacher told him it was a piece of cake!'
},
{
joke: 'What kind of tree fits in your hand?',
response: 'A palm tree'
},
{
joke: 'What is worse than raining cats and dogs?',
response: 'Hailing taxis'
}
];



let lameJoke = [
{
joke: 'Which bear is the most condescending?',
response: 'Pan-DUH'
},
{
joke: 'What would the Terminator be called in his retirement?',
response: 'The Exterminator'
}
];

//Request: http://localhost:3000/jokebook/categories
app.get("/jokebook/categories", (request, response) => {
    response.json(funnyJoke, lameJoke);
});

// accept POST request on the homepage
app.post("/", function (request, response) {
    response.send(request.body);
});

app.post('/jokebook/joke/new', function (request, response) {
    const  category = request.body.category;
    const joke = request.body.joke;
    const joy = request.body.joy;
    if (!jokeId || !category|| !joke || !joy) {
        response.status(400).send("Invalid Request")
    }
    else {
        const incomingJoke = request.body;
        jokess.push(incomingJoke);
        response.json(jokes);
    }

});





const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log('Example app listening on port: ' + PORT + "!");
});
