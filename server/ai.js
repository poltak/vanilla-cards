AI.prototype = Object.create(Player.prototype); // See note below
AI.prototype.constructor = AI;

AI.protype.runAI(currentGame){
	var AIMove = new Move(null, null);
	
	//check if the first move belongs to the AI (if the board is empty, this is the first move)
	if (isBoardEmpty(currentGame))
	{
		AIMove = chooseFirstMove(currentGame);
	}
	else
	{
		AIMove = chooseNonFirstMove(currentGame);
	}
	
	return makeGameFromMove(AIMove, currentGame);
}

/*
 * Checks the game to see if the board is empty of cards or not
 */
 bool isBoardEmpty(Game currentGame)
 {
 }

/*
 * Selects the first move for the AI
 * In the vanilla version, first move is completely different from the other moves
 */
 Move chooseFirstMove(Game currentGame)
 {
	//for now...
	return chooseRandomMove(currentGame);
	
	//for later: rule-based AI
	return chooseFirstMoveRuleBased(currentGame);
	
	//even laterer: MDP AI
}

/*
 * Selects the consequent moves for the AI
 * In the vanilla version, these moves are different from the first move
 */
 Move chooseNonFirstMove(Game currentGame)
 {
	//for now...
	return chooseRandomMove(currentGame);
	
	//for later: rule-based AI
	return chooseNonFirstMoveRuleBased(currentGame);
	
	//even laterer: MDP AI
}

/*
 * Returns a random valid move. Doesn't do any calculations to choose the move.
 */
 Move chooseRandomMove(Game currentGame)
 {
	//randomly choose a card from the hand
	
	//randomly choose a free spot on board
	
	//create and return a move based on the chosen spot and the chosen card
	
}

/*
 * Returns the first move based on the following heuristic:
 * Find the best spot for the best card I have
 */
 Move chooseFirstMoveRuleBased(Game currentGame)
 {
 	return findTheStrongestMove(currentGame);
 }

/*
 * Returns the strongest move that doesn't yield a card change
 * It is similar to a defending move in human players
 *
 * Find the best spot for the best card I have
 * Best card: highest level card in hand
 * Best spot: a tile that gives the most advantage to that card (allows more defends)
 */
 Move findTheStrongestMove(Game currentGame)
 {
	//select the highest level card at hand (first one if many)
	
	//look at the 4 sides, put the name of the sides that has a value higher than half value (5 for now) in a list
	
	//find the best spot (from the empty spots on the map) for it based on the list
	//if all four numbers are good, put in the middle
	//if three are good, check what threes...
	//...
	
	//create and return a move based on the selected card and the selected spot
}

/*
 * Returns the non-first move based on series of rules
 */
 Move chooseNonFirstMoveRuleBased(Game currentGame)
 {
	//get the frontier cards (useful in all the steps)
	//frontierCards = getFrontierCards(currentGame);
	
	//also check if any of those frontiers belong to the opponent
	/*
	for all cards in frontierCards
		if (the card is mine)
			myFrontierCards.append(currentCard);
		else
			opponentFrontierCards.append(currentCard);
		*/

	/*
	//the case where all the cards on the board is already mine:
	if (opponentFrontierCards.isEmpty())
		//find a strong position
		return findTheStrongestMove(currentGame);
		*/

	//so there are cards that I might be able to score
	//First try to score at least one card
	/*
	for each card in hand
		//it doesn't have to consider chain reactions. Only immediate gains
		try the card on all the free positions on the map and calculate the number of cards I win. save in a 3-tuple (card : position : score)
		
	//best move = the tuple with the highest score	
	if (bestScore is not zero)
		//create and return a move based on the card and the position in the tuple
	*/
	
	//I wasn't able to score anything, so let's find a strong place at least
	//return findTheStrongestMove(currentGame);
}

/*
 * Given a move, changes the game to make a new one (update the game based on the input move)
 *
 * just has to apply to input move to the game. No need to update the game and do the chain reaction
 */
 Game makeGameFromMove(Move inputMove, Game currentGame)
 {

 }
