"use strict";

module.exports = function(sequelize, DataTypes) {
    var comment = sequelize.define("comment", {
        id: {
            type: DataTypes.INTEGER , primaryKey: true
        },
        cb: {
            type: DataTypes.STRING
        },
        text: {
            type: DataTypes.STRING
        }}
        , {
        //classMethods: {
        //    associate: function(models) {
        //        comment.hasMany(models.Task)
        //    }
        //}
    });

    return comment;
};
