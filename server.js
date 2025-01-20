// Import express module
const express = require("express");
const path = require("path");
var colors = require('colors/safe');
const { log } = require("console");

const app = express();

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

const PORT = 3000;

const logger = (req, res, next)=> {
    console.log('day', new Date().getFullYear());
    next();
}

// Middleware
app.use(logger);
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/user/:id/:name", (req, res) => {
    const id = req.params.id
    const name = req.params.name

    console.log('id', id);
    console.log('name', name);
    res.render("index", {userId: id , userName: name});
});

app.get("/student", (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Student full name: ${firstname + ' ' + lastname }`)
})

app.get('/students', (req, res) => {
    res.status(200)
    res.json({
        students: [
            {
              name: 'Menghy', age: 18, gender: 'M',
            },
            {
                name: 'Rachna', age: 18, gender: 'F'  
            }
        ]
    })
})

app.get('/error', (req, res) => {
    res
        .status(400)
        .send("Error you can not access this route")
})

app.get("/addUser", (req, res) => {
    res.render('user');
})

app.post('/users', (req,res) => {
    console.log('req body',req.body);

    const firstname = req.body.firstname; 
    const lastname = req.body.lastname;
    console.log(`user has been created: ${firstname + ' ' + lastname}`);
    res.status(201).send(`user has been created: ${firstname + ' ' + lastname}`)
})

app.get('/profile', (req,res) => {

})

app.post('/post', (req,res) => {
})

app.post('/comments', (req,res) => {
})

app.get('/comment', (req,res) => {
})

app.put('/comment', (req,res) => {
})

app.delete('/comment', (req,res) => {
})

app.post('/sum', (req,res) => {
    
})

app.listen(PORT, (err) => {
if (err) console.log("Error in server setup".red);
console.log("Server listening on Port http://localhost:"+PORT);
});




