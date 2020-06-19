Well first of all I'm going to copy these laws to see what do they mean.
Law 5.2.2:
> The game is drawn when a position has arisen in which neither player can checkmate the opponent’s king with any series of legal moves. The game is said to end in a ‘dead position’. This immediately ends the game, provided that the move producing the position was in accordance with Article 3 and Articles 4.2 – 4.7.

As you can see it seems that we have to determine positions where no player can win, also the last move has to be a legal move, that's what Article 3 and Articles 4.2 – 4.7 . But in online chess we don't have to worry about that, let's see the next rule.
Law 6.9
> Except where one of Articles 5.1.1, 5.1.2, 5.2.1, 5.2.2, 5.2.3 applies, if a player does not complete the prescribed number of moves in the allotted time, the game is lost by that player. However, the game is drawn if the position is such that the opponent cannot checkmate the player’s king by any possible series of legal moves.

This says that unless the game has finished, if you run out of time, you lose, unless the opponent cannot checkmate you.

As we can see to solve this problem we can do a simplification, if we determined if one player could checkmate the other, then we could apply these laws:
- In law 5.2.2 we could apply it for both players on every single half-move we could determine when we end on a dead position.
- In law 6.9 we could apply this to the player who hadn't run out of time and know if he could checkmate his opponent.

So we have reduced our initial problem to only creating one algorithm to know if one opponent could checkmate the other, so we have to know how to determine this, continues on possibilities.md.
