import React from "react";
import "../styles/cell.scss"
import { Cell } from "../Models/Cell";
import { Colors } from "../Models/Colors"

interface IProps {
    cell: Cell,
    chooseCell: (target: Cell) => void
    currentCell: Cell | null
}

const CellComponent: React.FC<IProps> = ({ cell, chooseCell, currentCell }) => {


    return (
        <div onClick={() => chooseCell(cell)} className={
            ["cell", 
            cell.color === Colors.BLACK ? "cell--black" : "cell--white",
            currentCell?.id === cell.id ? "cell--choosen" : "",
            cell?.available && cell.figure && currentCell ? "cell--available" : ""
            ].join(" ")}>


            {cell.figure && <img src={cell.figure.logo!} alt="logo" />}

            {!cell.figure && currentCell && cell.available && <div className="cell__available"></div>}
        </div>
    )
}

export default CellComponent