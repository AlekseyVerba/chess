import { ModelFigures } from "./ModelFigures"
import { Cell } from "./Cell"
import { Colors } from "./Colors"
import logo from "../assets/black-bishop.png"
import { v4 } from "uuid"

export class Figure {
    name: ModelFigures
    cell: Cell
    color: Colors
    logo: typeof logo | null = null
    id: string

    constructor(cell: Cell, color: Colors) {
        this.name = ModelFigures.FIGURE
        this.cell = cell
        this.cell.figure = this
        this.color = color
        this.id = v4()
    }

    public canMove(target: Cell): boolean {
        if (target.figure?.color === this.color) {
            return false
        }

        if (target.figure?.name === ModelFigures.KING) {
            return false
        }

        return true
    }

    public moveFigure(target: Cell): any {
        return true
    }
}