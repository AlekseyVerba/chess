import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import { ModelFigures } from "../ModelFigures";
import blackImage from "../../assets/black-pawn.png"
import whiteImage from "../../assets/white-pawn.png"

export class Pawn extends Figure {

    isFirstStep: boolean = true

    constructor(cell: Cell, color: Colors) {
        super(cell, color)
        this.name = ModelFigures.PAWN
        this.logo = this.color === Colors.BLACK ? blackImage : whiteImage
    }


    public canMove(target: Cell): boolean {
        
        if (!super.canMove(target)) {
            return false
        }

        const step = this.color === Colors.BLACK ? -1 : 1
        const firstStep = this.color === Colors.BLACK ? -2 : 2 

        if (
            (
                (this.cell.y + step === target.y || this.isFirstStep && this.cell.y + firstStep === target.y) &&
                this.cell.x === target.x && this.cell.board.getCell(target.y, target.x).isEmpty()
            )
        ) {
            return true
        }

        if (this.cell.y + step === target.y && (this.cell.x + 1 === target.x || this.cell.x -1 === target.x) && this.cell.isEnemy(this.cell.board.getCell(target.y, target.x))) {
            return true
        }

        return false

    }

    public moveFigure(target: Cell) {
        super.moveFigure(target)
        this.isFirstStep = false
    }

}