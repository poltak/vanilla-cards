/*
 * Main class encapsulating all behaviour and attributes of the Player object.
 */
var MAX_CARDS = 5;

var Player = function () {
	this.deck = [];
};

/*
 * Given a specific card ID, attempts to pull the Card object from the database
 * and store it in the Player's hand.
 *
 * RETURN:
 * Returns boolean based on whether or not the given Card object can be found in
 * the database, and that the Player's hand is not already full.
 */
Player.prototype.addCard = function (cardId) {
	if (this.deck.length > MAX_CARDS)
		return false;

	var card = Cards.getCard(cardId);
	// If cardId cannot be found in the collection
	if (!card)
		return false;

	// If everything went well
	this.deck.push(card);
	console.log('');
	return true;
};
