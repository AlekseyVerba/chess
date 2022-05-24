import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import { ModelFigures } from "../ModelFigures";
import blackImage from "../../assets/black-bishop.png"
import whiteImage from "../../assets/white-bishop.png"

export class Bishop extends Figure {

    constructor(cell: Cell, color: Colors) {
        super(cell, color)
        this.name = ModelFigures.BISHOP
        this.logo = this.color === Colors.BLACK ? blackImage : whiteImage
    }


    public canMove(target: Cell): boolean {

        if (!super.canMove(target)) {
            return false
        }

        if (this.cell.checkDiagonal(target)) {
            return true
        }

        return false

    }

}