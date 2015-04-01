Cards.insert({
    id: 1,
    up: 1,
    down: 2,
    left: 5,
    right: 1
});
Cards.insert({
    id: 2,
    up: 1,
    down: 2,
    left: 5,
    right: 1
});
Cards.insert({
    id: 3,
    up: 1,
    down: 2,
    left: 5,
    right: 1
});

var testCard = {
    id: 1,
    up: 1,
    down: 1,
    left: 1,
    right: 1
}

/* Fix this. This should be unique */
var deck = [testCard,testCard];
Players.insert({
    deck: deck
})

