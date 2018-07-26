const path = require("path");
const router = require("express").Router();

const userController = require("../Controller/userControllers")

// API Routes
// router.use("/api", apiRoutes);

router.route("/api/users/goals")
  .get(userController.findAll);

  router.route("/api/users/goals")
  .post(userController.create);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });

module.exports = router;

