Here we are going to explore all possibilities where one player couldn't checkmate other. If the box of a possibility is marked as completed that means that this possibility has been implemented on the program, if a possibility has INCORRECT next to it, it means that this possibility is INCORRECT as I'll explain next:

SECTION 1 doesn't matter who has the move
  - [] One opponent cannot checkmate other because he/she doesn't have enough pieces to do it, this possibilities are simple to implement, let's make a list about the material that the side we are checking and the opponent, as sometimes if he/she has material, it's possible to checkmate:
    - [] King
    - [] King and Knight only if the opponent hasn't got:
      - [] At least one pawn (It could promote to a knight and finish like this 6nk/5N2/6K1/8/8/8/8/8 w - - 0 1) (in this an the other examples we can assume that the opponent could have more material placed in bad squares making possible to checkmate the opponent even if he had ten queens or more)
      - [] At least one bishop 6bk/8/6NK/8/8/8/8/8 w - - 0 1
      - [] At least one knight 6nk/5N2/6K1/8/8/8/8/8 w - - 0 1
      - [] At least one rook 6rk/5N2/7K/8/8/8/8/8 w - - 0 1
      - At least one queen INCORRECT, you cannot checkmate the opponent if he/she has a queen.
    - [] King any number of same colored bishops only if the opponent hasn't got:
      - [] At least one pawn (It could promote to a knight and finish like this 6nk/6B1/6K1/8/8/8/8/8 w - - 0 1)
      - [] At least one opposite colored bishop 6bk/6B1/6K1/8/8/8/8/8 w - - 0 1
      - Any number of same colored bishops INCORRECT, a king always have at least two squares with the opposite color that the square in which it's placed, in order to checkmate him the king has to be on a square on the same color as the two bishops, so the enemy king could scape through two squares, one can be controlled by our king, but the other can't be controlled or occupied by any piece on the board.
      - [] At least one rook 6rk/8/5B1K/8/8/8/8/8 w - - 0 1
      - At least one queen INCORRECT, you cannot checkmate the opponent if he or she has a queen.
  - [] King and pawns blocked with other pawns and divide the board in two parts with a barrier that the kings cannot cross, and they are on the side where they cannot take any piece. 8/1k6/1p1p1p1p/pPpPpPpP/P1P1P1P1/8/5K2/8 w - - 0 1
  - [] The same as the last example but also with any number of same colored bishops that are trapped in their kings respective site and cannot be taken by any pawn in any position they could reach. 8/1k2b3/1p1p1p1p/pPpPpPpP/P1P1P1P1/1B6/5K2/8 w - - 0 1

SECTION 2 our turn
  - [] We cannot checkmate the opponent because every move we stalemate him.
  - [] We cannot checkmate the opponent because every move we make draw as in explained on SECTION 1.
  - [] We cannot checkmate the opponent because after every move we do, the opponent in every move checkmates or stalemates us.
  - [] We cannot checkmate the opponent because after every move we do, after every move he does, after every move we do, the opponent in every move checkmates or stalemates us. (To be possible it has to be impossible to come again to the last position)
SECTION 3 his turn
  - [] You cannot checkmate the opponent because he in every move checkmates or stalemates us.
    - [] He/She is on check
      - [] He/she can move his/her king (If he/she could move his/her king, and that move is checkmate there must be a discovered check in a different direction than the direction the check came from)
      - [] He/she can't move his/her king Kb4b1/b7/8/3B4/8/8/7B/6Bk b - - 0 1
    - [] He/She isn't on check
      - [] He/she can move his/her king
      - [] He/she can't move his/her king
  - [] You cannot checkmate the opponent because he in every move after every move we do after every move he does checkmates or stalemates us.
  - [] The same reasoning but becoming more complicated
