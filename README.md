# tal-chess

TypeScript engine for chess and other two player zero-sum games.

# Goals

- Code readability
- Ability to plug in and test different [search](https://www.chessprogramming.org/Search) and [evaluation](https://www.chessprogramming.org/Evaluation) algorithms.
- Ability to play with personality. Inspired by the great [Mikhail Tal](https://en.wikipedia.org/wiki/Mikhail_Tal). Ideally should be able to play with a choice of personalities based on famous players, through analyzing their games and classifying positions and determining their favorite types.
- Simple text-based UI making it possible to play without a UI for testing purposes. Unicode characters as used by [Sunfish](https://github.com/thomasahle/sunfish) should suffice to represent board, and full algebraic should be used for input.

# Non goals

- Sophisticated UI. Will eventually implement [UCI](https://en.wikipedia.org/wiki/Universal_Chess_Interface) for chess to communicate with UIs.
- Playing strength beyond grandmaster level. There are enough unbeatable engines; this one should be fun to play.

# Possible future goals

- Opening book, possibly derived from games played by chosen personalities

# References

## Chess Programming

- [Chess Programming Wiki](https://www.chessprogramming.org/Main_Page)
- [What are PGN and FEN?](https://support.chess.com/article/658-what-are-pgn-fen)

## Chess

- [Algebraic notation](https://en.wikipedia.org/wiki/Algebraic_notation_(chess))
- [On personality in chess](https://www.chessgames.com/perl/chesscollection?cid=1005503) - Note particularly Botvinnik's comments and how he and Tal sought radically different types of position
