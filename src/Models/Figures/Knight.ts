import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure } from "../Figure";
import { ModelFigures } from "../ModelFigures";
import blackImage from "../../assets/black-knight.png"
import whiteImage from "../../assets/white-knight.png"

export class Knight extends Figure {

    constructor(cell: Cell, color: Colors) {
        super(cell, color)
        this.name = ModelFigures.KNIGHT
        this.logo = this.color === Colors.BLACK ? blackImage : whiteImage
    }

    public canMove(target: Cell): boolean {

        if (!super.canMove(target)) {
            return false
        }

        const absX = Math.abs(this.cell.x - target.x)
        const absY = Math.abs(this.cell.y - target.y)

        if ((absY === 2 && absX === 1) || (absY === 1 && absX === 2)) {
            return true
        }

        return false

    }

}