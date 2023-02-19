import { BoxSymbol } from '../../box/domain/box-symbol'
import { Player } from '../domain/player'

export class PlayerUtilities implements Player {

    activeTurn: boolean
    wins: number = 0
    defeats: number = 0
    draws: number = 0

    constructor(private readonly boxSymbol: BoxSymbol) {}

    toggleTurn(): boolean {
        this.activeTurn = !this.activeTurn
        return this.activeTurn
    }

    setWins(): number {
        this.wins++
        return this.wins
    }

    setDefeats(): number {
        this.defeats++
        return this.defeats
    }

    setDraws(): number {
        this.draws++
        return this.draws
    }

    getWins(): number {
        return this.wins
    }

    getDefeats(): number {
        return this.defeats
    }

    getDraws(): number {
        return this.draws
    }

    getBoxSymbol(): BoxSymbol {
        return this.boxSymbol
    }
}
