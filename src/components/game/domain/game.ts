export interface Game {
    moves: number
    isOver: boolean
    setMoves(): void
    setIsOver(): void
    getMoves(): number
    getIsOver(): boolean
}
