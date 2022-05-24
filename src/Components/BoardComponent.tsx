import React, { useEffect, useState } from "react"
import CellComponent from "./CellComponent"
import { Board } from "../Models/Board"
import "../styles/board.scss"
import { Cell } from "../Models/Cell"
import { Player } from "../Models/Player"
import { Colors } from "../Models/Colors"


interface IProps {
    board: Board,
    updateBoard: () => void
    currentPlayer: Player
    whitePlayer: Player
    blackPlayer: Player
    setCurrentPlayer: (player: Player) => void
}

const BoardComponent: React.FC<IProps> = ({ board, updateBoard, currentPlayer, blackPlayer, whitePlayer, setCurrentPlayer }) => {

    const { cells } = board

    const [currentCell, setCurrentCell] = useState<Cell | null>(null)

    const chooseCell = (target: Cell) => {

        if (currentCell && currentCell !== target && currentCell.figure?.canMove(target)) {
            currentCell.moveFigure(target)
            setCurrentPlayer(currentPlayer.color === Colors.WHITE ? blackPlayer : whitePlayer )
            setCurrentCell(null)
        } else {
            if (!target.figure || currentPlayer.color !== target.figure?.color) {
                return false
            }
            setCurrentCell(target)
        }


    }

    useEffect(() => {
        board.checkCellsOnAvailable(currentCell)
        updateBoard()
    }, [currentCell])

    console.log(board)

    return (
        <div>
            <div className="board">
                {
                    cells.map((row, idx) => {
                        return (
                            <React.Fragment key={idx}>
                                {
                                    row.map(cell => {
                                        return <CellComponent
                                            key={cell.id}
                                            cell={cell}
                                            chooseCell={chooseCell}
                                            currentCell={currentCell}
                                        />
                                    })
                                }
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BoardComponent