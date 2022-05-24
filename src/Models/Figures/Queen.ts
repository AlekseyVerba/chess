import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import { ModelFigures } from "../ModelFigures";
import blackImage from "../../assets/black-queen.png"
import whiteImage from "../../assets/white-queen.png"

export class Queen extends Figure {

    constructor(cell: Cell, color: Colors) {
        super(cell, color)
        this.name = ModelFigures.QUEEN
        this.logo = this.color === Colors.BLACK ? blackImage : whiteImage
    }

    public canMove(target: Cell): boolean {

        if (!super.canMove(target)) {
            return false
        }

        if (this.cell.checkHorisontal(target)) {
            return true
        }

        if (this.cell.checkVertical(target)) {
            return true
        }

        if (this.cell.checkDiagonal(target)) {
            return true
        }

        return false

    }

}