var db = require("../db/db_connection");
var uuid = require('uuid');

var Character = {
  getAllCharacter: function (callback) {
    return db.query("Select * from character_vttq", callback);
  },
  getCharacterById: function (id, callback) {
    return db.query("select * from character_vttq where id_game=?", [id], callback);
  },
  addCharacter: function (uuid_value, character, callback) {
    return db.query(
      "Insert into character_vttq(id, id_game, name_game, server_game, create_date) values(?,?,?,?, ?);",
      [uuid_value, character.id, character.name, character.server, new Date()],
      callback
    );
  },
  deleteCharacter: function (id, callback) {
    return db.query("delete from character_vttq where id_game=?", [id], callback);
  },
  updateCharacter: function (id, character, callback) {
    return db.query(
      "update character set name_game=?, server_game=? where id_game=?",
      [character.name, character.server, id],
      callback
    );
  },
};
module.exports = Character;
