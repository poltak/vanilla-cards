/*
 * Main Card class to encapsulate all behavior and attributes of a Card object.
 */

var Card = function(cardId) {
// Attributes on Card
  this.cardId = cardId;

	// Get card attack powers from DB
  this.up = Cards.getUpPow(cardId);
  this.down = Cards.getDownPow(cardId);
  this.left = Cards.getLeftPow(cardId);
  this.right = Cards.getRightPow(cardId);
};

// Methods on card
