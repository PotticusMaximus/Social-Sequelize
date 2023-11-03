const { Comment, Like, Post, Profile, User } = require("./models/index");

User.hasOne(Profile);
Profile.belongsTo(User);
//
Profile.hasMany(Post);
Post.belongsTo(Profile);
//
Post.hasMany(Comment);
Comment.belongsTo(Post);
//
User.belongsToMany(Like, { through: "UserLike" });
Like.belongsToMany(User, { through: "UserLike" });
//
module.exports = {
  Comment,
  Like,
  Post,
  Profile,
  User,
};
