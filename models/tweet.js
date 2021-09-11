'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tweet extends Model {

    static associate(models) {
      Tweet.belongsTo(models.User, {
        foreignKey: 'UserId',
        as: 'user'
      })
      Tweet.hasMany(models.Reply, {
        foreignKey: 'TweetId',
        as: 'replies'
      })
      Tweet.hasMany(models.Like, {
        foreignKey: 'TweetId',
        as: 'likes'
      })
    }
  };
  Tweet.init({
    UserId: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Tweet',
  });
  return Tweet;
};