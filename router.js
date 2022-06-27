var express = require("express");
var router = express.Router();
var Character = require("./model/character");
var GroupGame = require("./model/group_game");
var ServerGame = require("./model/server_game");
var uuid = require('uuid');

router.get("/character/:id?", function (req, res, next) {
  if (req.params.id) {
    Character.getCharacterById(req.params.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  } else {
    Character.getAllCharacter(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  }
});

router.post("/character/", function (req, res, next) {
    let uuid_v4 = uuid.v4();
    Character.addCharacter(uuid_v4, req.body, function (err, data) {
    if (err) {
      res.json(err);
    } else {
       res.json(uuid_v4);
    }
  });
 
});

router.put("/character/:id", function (req, res, next) {
  Character.updateCharacter(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});


router.get("/server", function (req, res, next) {
    ServerGame.getServerByGroup(req.query.id, function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

  router.get("/group", function (req, res, next) {
    GroupGame.getAllGroup(function (err, rows) {
      if (err) {
        res.json(err);
      } else {
        res.json(rows);
      }
    });
  });

module.exports = router;
