const db = require("../Models");

// Defining methods for the userControllers
module.exports = {
  findAll: function(req, res) {
    db.user
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // Create for Mongo Db
  create: function(req, res) {

    console.log("This is the stuff");
    //Check to see if user exists here:
    db.user
    .find(req.query)
    .then((result) =>  {
      console.log("This is the result from checking for user: ", result);
      if(!result){
        db.user
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        
        .catch(err => res.status(422).json(err));
      }
      else
      {
        res.json(false)
        
      }
    })
  
  }
};
