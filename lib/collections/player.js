Players = new Meteor.Collection("players");

PlayerSchema = new SimpleSchema({
	deck: {
		type: [CardSchema],
		minCount: 0,
		maxCount: 5
	}
});

Players.attachSchema(PlayerSchema);
