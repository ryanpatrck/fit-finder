const mongoose = require("mongoose");
const db = require("../Models");

// This file empties the users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactuserslist"
);

const userSeed = [
  {
    name: "Ross Patrick",
    age: 21,
    weight: 170,
    height: "Six Foot"
    
  },
  {
    name: "Sean Patrick",
    age: 31,
    weight: 215,
    height: "Five Foot Ten"
 
  },
  {
    name: "Dustin Garcia",
    age: 31,
    weight: 215,
    height: "six foot two"
   
  }
  
];

db.user
  .remove({})
  .then(() => db.user.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
