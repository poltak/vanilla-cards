Cards = new Meteor.Collection("cards");

var Schemas = {};

Schemas.Card = new SimpleSchema({
    id: {
        type: Number,
        label: "The Id of the card",
        unique: true
    },
    up: {
        type: Number,
        label: "Up power",
        min: 0,
        max: 9
    },
    down: {
        type: Number,
        label: "Down power",
        min: 0,
        max: 9
    },
    left: {
        type: Number,
        label: "Left power",
        min: 0,
        max: 9
    },
    right: {
        type: Number,
        label: "Right power",
        min: 0,
        max: 9
    }
});

Cards.attachSchema(Schemas.Card);