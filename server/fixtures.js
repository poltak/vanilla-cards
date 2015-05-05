// Inserts randomised test cards into collection
if (Cards.find().count() === 0) {
  var CARD_MAX_VAL = 9;
  var NUM_OF_TEST_CARDS = 10;

  var generateCard = function() {
    return {
      up:    Math.random() * CARD_MAX_VAL,
      down:  Math.random() * CARD_MAX_VAL,
      left:  Math.random() * CARD_MAX_VAL,
      right: Math.random() * CARD_MAX_VAL
    }
  }

  for (var i = 0; i < NUM_OF_TEST_CARDS; i++) {
    Cards.insert(generateCard());
  }

}