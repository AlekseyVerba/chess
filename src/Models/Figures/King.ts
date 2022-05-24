import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import { ModelFigures } from "../ModelFigures";
import blackImage from "../../assets/black-king.png"
import whiteImage from "../../assets/white-king.png"

export class King extends Figure {

    constructor(cell: Cell, color: Colors) {
        super(cell, color)
        this.name = ModelFigures.KING
        this.logo = this.color === Colors.BLACK ? blackImage : whiteImage
    }

    public canMove(target: Cell): boolean {

        if (!super.canMove(target)) {
            return false
        }


        if (
            this.cell.y + 1 === target.y && this.cell.x === target.x ||
            this.cell.y - 1 === target.y && this.cell.x === target.x ||
            this.cell.x + 1 === target.x && this.cell.y === target.y ||
            this.cell.x - 1 === target.x && this.cell.y === target.y ||

            this.cell.x + 1 === target.x && this.cell.y + 1 === target.y ||
            this.cell.x + 1 === target.x && this.cell.y - 1 === target.y ||

            this.cell.x - 1 === target.x && this.cell.y + 1 === target.y ||
            this.cell.x - 1 === target.x && this.cell.y - 1 === target.y

        ) {
            return true
        }

        return false

    }

}




