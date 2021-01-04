
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

    readonly playerToMove: White | Black;

    readonly gameStatus: GameStatus;

     /**
     * Allows subinterfaces to add additional state such as castling permissions in chess
     */
    readonly gameState: ST;

    legalMoves(): M[];

    /**
     * Return the position that results after the given move
     */
    afterMove(move: M): Position<M, ST>;


}

/**
 * Empty tag interface to be extended
 */
export interface Move {

}
