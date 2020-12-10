const express = require("express");
const path = require("path");
const router = express.Router();

// Import the model (wrappit.js) to use its database functions.
const db = require("../models");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

router.get("/gifts", function(req, res) {
  db.Gift.findAll({}).then(function(dbGifts) {
    // We have access to the gifts as an argument inside of the callback function
    res.render("results",{gifts: dbGifts});
  });
});

// router.post("/api/wrappit", function(req, res) {
//   console.log(req.body);
//   db.Gift.create({
//     gift: req.body.
//   }).then(function(data) {
//       res.json(data);
//   }); 
// });

// router.put("/api/burger/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   burger.updateOne({
//     devoured: req.body.devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;