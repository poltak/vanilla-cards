// MongoDB collection instantiations
GameLogs = new Meteor.Collection("gameLogs");
Cards = new Meteor.Collection("cards");


// meteor-collection2 schemas for previously instantiated collections
var Schemas = {};

Schemas.Log = {};


// Attach schemas to collections
GameLogs.attachSchema(Schemas.Log);
