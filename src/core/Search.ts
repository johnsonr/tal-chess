import { Position, Move, GameState } from "./Position";
import { Evaluator, Score } from "./Evaluator";

export interface ScoredMove<M extends Move, SC extends Score> {
    readonly move: M;
    score: Score;
}

export interface SearchResult<M extends Move> {

    readonly moves: Move[];

    readonly terminalPositionsEvaluated: number;

}

export interface SearchOpts {
    depth: number;

    /**
     * Maximum number of moves to return
     */
    limit: number;
}

/**
 * Simple searcher using depth.
 * 
 */
export interface Searcher<M extends Move, ST extends GameState, SC extends Score> {

    /**
     * Search with the given evaluator, returning the best <limit> moves for the player to 
     * play, best first.
     */
    getScoredMoves(p: Position<M, ST>, evaluator: Evaluator<M, ST, SC>, opts: SearchOpts): Array<ScoredMove<M, SC>>;
}