import { Cell } from "./Cell"
import { Colors } from "./Colors"
import { Pawn } from "./Figures/Pawn"
import { Bishop } from "./Figures/Bishop"
import { Knight } from "./Figures/Knight"
import { Queen } from "./Figures/Queen"
import { King } from "./Figures/King"
import { Rook } from "./Figures/Rook"
import { ModelFigures } from "./ModelFigures"
import { Figure } from "./Figure"


export class Board {
    cells: Cell[][] = []
    losersWhite: Figure[] = []
    losersBlack: Figure[] = []

    public createCells() {
        this.cells = []
        for (let y = 0; y < 8; y++) {
            const row = []

            for (let x = 0; x < 8; x++) {

                if ((x + y) % 2 !== 0) {
                    row.push(new Cell(Colors.BLACK, y, x, null, this)) // Черный
                } else {
                    row.push(new Cell(Colors.WHITE, y, x, null, this)) // Белый
                }

            }

            this.cells.push(row)

        }

        this.addFigures()

    }

    public checkCellsOnAvailable(selectCell: Cell | null) {
        if (!selectCell) return false
        for (let y = 0; y < 8; y++) {

            for (let x = 0; x < 8; x++) {

                const target = this.getCell(y, x)
                const result = !!selectCell?.figure?.canMove(target)

                target.available = result
            }

        }
    }

    public updateBoard() {
        const newBoard = new Board()
        newBoard.cells = this.cells
        newBoard.losersWhite = this.losersWhite
        newBoard.losersBlack = this.losersBlack
        return newBoard
    }


    public addLostFiguere(figure: Figure) {
        if (figure.color === Colors.WHITE) {
            this.losersWhite.push(figure)
        } else {
            this.losersBlack.push(figure)
        }
    }


    public getCell(y: number, x: number) {
        return this.cells[y][x]
    }

    private createPawns() {

        for (let x = 0; x < 8; x++) {
            const cellWhite = this.getCell(1, x)
            const cellBlack = this.getCell(6, x)
            new Pawn(cellWhite, Colors.WHITE)
            new Pawn(cellBlack, Colors.BLACK)
            
        }

    }

    private createBishops() {
        new Bishop(this.getCell(0, 2), Colors.WHITE)
        new Bishop(this.getCell(0, 5), Colors.WHITE)

        new Bishop(this.getCell(7, 2), Colors.BLACK)
        new Bishop(this.getCell(7, 5), Colors.BLACK)
    }

    private createKnights() {
        new Knight(this.getCell(0, 1), Colors.WHITE)
        new Knight(this.getCell(0, 6), Colors.WHITE)

        new Knight(this.getCell(7, 1), Colors.BLACK)
        new Knight(this.getCell(7, 6), Colors.BLACK)
    }

    private createQueens() {
        new Queen(this.getCell(0, 3), Colors.WHITE)

        new Queen(this.getCell(7, 3), Colors.BLACK)
    }

    private createKings() {
        new King(this.getCell(0, 4), Colors.WHITE)
        
        new King(this.getCell(7, 4), Colors.BLACK)
    }

    private createRooks() {
        new Rook(this.getCell(0,0), Colors.WHITE)
        new Rook(this.getCell(0,7), Colors.WHITE)

        new Rook(this.getCell(7,0), Colors.BLACK)
        new Rook(this.getCell(7,7), Colors.BLACK)
    }

    public addFigures() {
        this.createPawns()
        this.createBishops()
        this.createKnights()
        this.createQueens()
        this.createKings()
        this.createRooks()
    }

}