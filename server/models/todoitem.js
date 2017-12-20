'use strict';
module.exports = (sequelize, DataTypes) => {
  var TodoItem = sequelize.define('TodoItem', {
    content: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        console.log("APAKAH MODEL INI >> ", models);
        // associations can be defined here
        TodoItem.belongsTo(models.Todo, {
          foreignKey: 'todoId',
          onDelete: 'CASCADE',
        })
      }
    }
  });
  return TodoItem;
};
