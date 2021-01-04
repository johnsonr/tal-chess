
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

export interface Score {

}

export interface GameState {

}

/**
 * Position for any 2-player game
 */
export interface Position<M extends Move, ST extends GameState> {

    playerToMove: White | Black;

    gameStatus: GameStatus;

    legalMoves(): M[];

    /**
     * Return the position after this move
     */
    afterMove(move: M): Position<M, ST>;

   
    gameState: ST;

}

export interface Move {

}

export interface Evaluator<M extends Move, ST extends GameState, SC extends Score> {
    evaluate(p: Position<M, ST>): SC;
}