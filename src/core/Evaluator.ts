import { Position, Move, GameState } from "./Position";

/**
 * Extended by specific evaluators.
 * Score should score the position with positive scores favoring white,
 * negative favoring black.
 */
export interface Score {

}

/**
 * Implemented by objects that can evaluate terminal positions
 */
export interface Evaluator<M extends Move, ST extends GameState, SC extends Score> {

    /**
     * Return the total number of positions this evaluator has evaluated
     */
    readonly positionsEvaluated: number;

    evaluate(p: Position<M, ST>): SC;
}