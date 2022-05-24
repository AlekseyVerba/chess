import { Colors } from "./Colors"
import { Figure } from "./Figure"
import { Board } from "./Board"
import { v4 } from "uuid"
import { ModelFigures } from "./ModelFigures"

export class Cell {
    color: Colors
    y: number
    x: number
    figure: Figure | null
    board: Board
    available: boolean
    id: string

    constructor(color: Colors, y: number, x: number, figure: Figure | null, board: Board) {
        this.color = color
        this.y = y
        this.x = x
        this.figure = figure
        this.board = board
        this.id = v4()
        this.available = true
    }

    public moveFigure(target: Cell) {
        if (this.figure && this.figure?.canMove(target)) {

            if (this.figure.name === ModelFigures.PAWN) {
                this.figure.moveFigure(this)
            }

            if (target.figure) {
                this.board.addLostFiguere(target.figure)
            }

            target.figure = this.figure
            target.figure.cell = target

            this.figure = null

        }
        
    }

    public isEmpty(): boolean {
        console.log(this)
        return this.figure === null
    }

    public isEnemy(target: Cell): boolean {

        if (this.figure && target.figure && this.figure.color !== target.figure.color) {
            return true
        }

        return false
    }


    public checkHorisontal(target: Cell) {

        if (this.y !== target.y) {
            return false
        }


        const max = Math.max(this.x, target.x)
        const min = Math.min(this.x, target.x)



        for (let i = min + 1; i < max; i++) {

            if (!this.board.getCell(this.y, i).isEmpty()) {
                return false
            }

        }

        return true

    }


    public checkVertical(target: Cell) {

        if (this.x !== target.x) {
            return false
        }


        const max = Math.max(this.y, target.y)
        const min = Math.min(this.y, target.y)



        for (let i = min + 1; i < max; i++) {

            if (!this.board.getCell(i, this.x).isEmpty()) {
                return false
            }

        }

        return true

    }

    public checkDiagonal(target: Cell) {

        const cordX = Math.abs(this.x - target.x)
        const cordY = Math.abs(this.y - target.y)

        if (cordX !== cordY) {
            return false
        }

        const dx = this.x < target.x ? 1 : -1
        const dy = this.y < target.y ? 1 : -1

        for (let i = 1; i < cordY; i++) {
            if (!this.board.getCell(this.y + (dy * i), this.x + (dx * i)).isEmpty()) {
                return false
            }
        }

        return true

    }

}