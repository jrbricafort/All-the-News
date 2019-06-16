var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/home", function (req, res) {
    res.render("main", {
      msg: "Welcome!",
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load index page
  app.get("/saved", function (req, res) {
    res.render("saved", {
      msg: "Welcome!",
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

};
