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
var OpenTok = require('opentok');
let db = require("./models");
const seeds = require("./Scripts/seeduserDB");

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
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
   }

//Update Mongo on heroku
var databaseUri ="mongodb://localhost/reactuserslist"
if (process.env.MONGODB_URI){
    mongoose.connect(process.env.MONGODB_URI);
} else {
    mongoose.connect(databaseUri);
}
var db1 = mongoose.connection;

db1.on('error', function(err) {
    console.log('Mongoose Error: ', err);
})

db1.once('open', function() {
    console.log('mongoose connection successful.')
})

// Instantiating the express-jwt middleware
const jwtMW = exjwt({
    secret: 'keyboard cat 4 ever'
});



app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    const saltRounds = 10;
    bcrypt.hash(password, saltRounds, function(err, hash) {
      db.user.create({
        username: username,
        password: hash
      }).then((result) => {
        console.log("User created:", result);
        res.json("User created!");
      })
    })
  })
//
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.user.findOne(
    {
      where: { username: username }
    }
  ).then((user) => {
    if(user === null){
      res.json(false);
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if(result === true){
        console.log("valid");
        let token = jwt.sign({ username: user.username }, 'keyboard cat 4 ever', {expiresIn: 129600});
        res.json({
          success: true,
          err: null,
          token
        })
      }
      else {
        console.log("Entered password was wrong!");
        res.status(401).json({
          success: false,
          token: null,
          err: 'Entered Password and Hash do not match!'
        })
      }
    })
  })
})

app.get('/', jwtMW /* Using the express jwt MW here */, (req, res) => {
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



// Starting the app on PORT 3000
const PORT = process.env.PORT || 3001
db.mongoose.sync().then(() => 
app.listen(PORT, function () {
    // eslint-disable-next-line
    console.log(`Magic happens on port ${PORT}`);
}));

module.exports= app