/**
 * To get started install
 * express bodyparser jsonwebtoken express-jwt
 * via npm
 * command :-
 * npm install express bodyparser jsonwebtoken express-jwt --save
 */

// Bringing all the dependencies in
const express = require('express'),
    routes = require('./Routes/index');
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      exjwt = require('express-jwt'),
      mongoose = require("mongoose")
require('dotenv').config()
var OpenTok = require('opentok');

// const seeds = require("./Scripts/seeduserDB");

// var apiKey = process.env.API_KEY;
// var apiSecret= process.env.API_SECRET;
// var opentok = new OpenTok(apiKey, apiSecret);
    
    
// Instantiating the express app
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");

    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Origin, X-Requested-With');
  
    next();
});

app.use(routes);
// Cors is required for access


// Setting up bodyParser to use json and set it to req.body

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var databaseUri ="mongodb://localhost/reactuserslist"
if (process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(databaseUri);
}
var db = mongoose.connection;

db.on('error', function(err) {
    console.log('Mongoose Error: ', err);
})

db.once('open', function() {
    console.log('mongoose connection successful.')
})

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
    secret: 'keyboard cat 4 ever'
});



// MOCKING DB just for test
let users = [
    {
        id: 1,
        username: 'test',
        password: 'asdf123'
    },
    {
        id: 2,
        username: 'test2',
        password: 'asdf12345'
    }
];
//
// LOGIN ROUTE
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    //do this
    console.log("This is our request:", req.body);
   
    // Use your DB ORM logic here to find user and compare password
    for (let user of users) { // I am using a simple array users which i made above
        if (username == user.username && password == user.password /* Use your password hash checking logic here !*/) {
            //If all credentials are correct do this
            let token = jwt.sign({ id: user.id, username: user.username }, 'keyboard cat 4 ever', { expiresIn: 129600 }); // Sigining the token
            res.json({
                sucess: true,
                err: null,
                token

            });
            break;
        }
        else {
            res.status(401).json({
                sucess: false,
                token: null,
                err: 'Username or password is incorrect'
            });
        }
    }
});

app.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
    res.send('You are authenticated'); //Sending some response when authenticated
});



// Starting the app on PORT 3000
const PORT = 3001;
app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log(`Magic happens on port ${PORT}`);
});
module.exports= app