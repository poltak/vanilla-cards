/*
 * Main Card class to encapsulate all behavior and attributes of a Card object.
 */
 var Card = function(cardId) {
    // Attributes on Card
    this.cardId = cardId;
    // Get card attack powers from DB
    var cardObj = Meteor.subscribe("card");

    /*
    this.up = cardObj.up;
    this.down = cardObj.down;
    this.left = cardObj.left;
    this.right = cardObj.right;
    */

    this.attacks['up'] = cardObj.up;
    this.attacks['right'] = cardObj.right;
    this.attacks['down'] = cardObj.down;
    this.attacks['left'] = cardObj.left;
};