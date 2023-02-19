import { Game } from '../domain/game'

export class GameActions implements Game {
    moves: number = 0
    isOver: boolean = false
    constructor() {}

    setMoves(): void {
        this.moves++
    }
    setIsOver(): void {
        this.isOver = true
    }
    getMoves(): number {
        return this.moves
    }
    getIsOver(): boolean {
        return this.isOver
    }
}
