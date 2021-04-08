const User = require('./User');
const Category = require('./Category');
const Comment = require('./Comment');
const Event = require('./Event');
const Gift = require('./Gift');
const Guest = require('./Guest');
const Potluck = require('./Potluck');
const Type = require('./Type');

User.hasMany(Event, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Event.belongsTo(User, {
  foreignKey: 'user_id'
});

Event.hasMany(Comment, {
  foreignKey: 'event_id',
  onDelete: 'CASCADE'
});

Event.hasMany(Gift, {
  foreignKey: 'event_id',
  onDelete: 'CASCADE'
});

Event.hasMany(Guest, {
  foreignKey: 'event_id',
  onDelete: 'CASCADE'
});

Event.hasMany(Potluck, {
  foreignKey: 'event_id',
  onDelete: 'CASCADE'
});

Potluck.belongsTo(User, {
  foreignKey: 'user_id'
});

Gift.belongsTo(User, {
  foreignKey: 'user_id'
});














module.exports = { User, Event, Category, Comment, Gift, Potluck, Type, Guest };
