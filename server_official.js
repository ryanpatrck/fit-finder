/**
 * To get started install
 * express bodyparser jsonwebtoken express-jwt
 * via npm
 * command :-
 * npm install express bodyparser jsonwebtoken express-jwt --save
 */

// Bringing all the dependencies in
    const express = require('express'),
          routes = require('./Routes/index')
          cookieParser = require('cookie-parser'),
          bcrypt = require('bcryptjs'),
          bodyParser = require('body-parser'),
          jwt = require('jsonwebtoken'),
          exjwt = require('express-jwt'),
          mongoose = require("mongoose");
var path = require("path");
var OpenTok = require('opentok');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactuserslist");
//const seeds = require("./Scripts/seeduserDB");

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

// Cors is required for access


// Setting up bodyParser to use json and set it to req.body

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());



if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    
    app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
    secret: 'keyboard cat 4 ever'
});



/* Create a signup post route that will store the username and password in our DB along with encrypting the password using the bcrypt package. We will want to store the password in the DB as a hash, which requires salting(A salt is random data that is used as an additional input to a one-way function that "hashes" data, a password or passphrase.)*/
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    console.log(username, email, password)
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      db.User.create({
        "username": username,
        "email": email,
        "password": hash
      }).then((result) => {
        console.log("user created:", result);
        res.json("user created!");
      })
    })
  })

app.get('/auth', jwtMW /* Using the express jwt MW here */, (req, res) => {
    res.send('You are authenticated'); //Sending some response when authenticated
});

// Error handling 
app.use(function (err, req, res, next) {
  
    if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
        res.status(401).send(err);
        console.log("I am not working!!!!", err)
        
    }
    else {
        next(err);
    }
});

// Add routes, both API and view
app.use(routes);
// Starting the app on PORT 3000
const PORT = process.env.PORT || 3001

app.listen(PORT, function () {
    // eslint-disable-next-line
    console.log(`Magic happens on port ${PORT}`);
});

module.exports= app