import { BoxSymbol } from '../../box/domain/box-symbol'
export interface Player {
    activeTurn: boolean
    wins: number
    defeats: number
    draws: number
    toggleTurn(): boolean
    setWins(): void
    setDefeats(): void
    setDraws(): void
    getWins(): number
    getDefeats(): number
    getDraws(): number
    getBoxSymbol(): BoxSymbol
}
