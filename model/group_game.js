var db = require("../db/db_connection");

var GroupGame = {

  getAllGroup: function (callback) {
    return db.query("select DISTINCT group_game.cluster,group_game.cluster_name from group_game ORDER BY group_game.cluster", callback);
  }
};
module.exports = GroupGame;
