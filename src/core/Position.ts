
/**
 * Is this game in progress or has it been decided?
 */
export enum GameStatus {
    WhiteWin,
    BlackWin,
    Draw,
    Continuing,
  }

export type White = 0;
export const White = 0;
export type Black = 1;
export const Black = 1;

/**
 * Allows game-specific state to be added
 */
export interface GameState {

}

/**
 * Position for any 2-player game.
 * Immutable.
 */
export interface Position<M extends Move, ST extends GameState> {

  // TODO probably need a unique key for transposition table lookup

    readonly playerToMove: White | Black;

    readonly gameStatus: GameStatus;

     /**
     * Allows subinterfaces to add additional state such as castling permissions in chess
     */
    readonly gameState: ST;

    /**
     * Return the legal moves from this position. Ordering not guaranteed
     */
    legalMoves(): M[];

    /**
     * Return the position that results after the given move.
     * The move should be one returned from the legalMoves() method, although there is no
     * guarantee of checking as this might impact efficiency.
     */
    afterMove(move: M): Position<M, ST>;

}

/**
 * Empty tag interface to be extended
 */
export interface Move {

}
