import { Position, Move, GameState } from "./Position";
import { Evaluator, Score } from "./Evaluator";

export interface Searcher<M extends Move, ST extends GameState, SC extends Score> {
    evaluate(p: Position<M, ST>, evaluator: Evaluator<M, ST, SC>): SC;
}