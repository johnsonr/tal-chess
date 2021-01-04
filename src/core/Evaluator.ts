import { Position, Move, GameState } from "./Position";

/**
 * Extended by specific evaluators
 */
export interface Score {

}

export interface Evaluator<M extends Move, ST extends GameState, SC extends Score> {
    evaluate(p: Position<M, ST>): SC;
}