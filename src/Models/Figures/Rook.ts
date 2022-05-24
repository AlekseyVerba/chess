import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import { ModelFigures } from "../ModelFigures";
import blackImage from "../../assets/black-rook.png"
import whiteImage from "../../assets/white-rook.png"

export class Rook extends Figure {

    constructor(cell: Cell, color: Colors) {
        super(cell, color)
        this.name = ModelFigures.ROOK
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

        return false

    }

}