Meteor.publish('cards', function() {
    return Cards.find();
});

Meteor.publish('card', function(cardId) {
    return Cards.find({
        id: cardId
    })[0];
});