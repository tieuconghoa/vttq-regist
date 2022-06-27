var db = require("../db/db_connection");

var ServerGame = {

  getServerByGroup: function (group, callback) {
    return db.query("select * from server_game where `id` = ?", [group], callback);
  },

  getAllServer: function (group, callback) {
    return db.query("select * from server_game", callback);
  }
};
module.exports = ServerGame;
