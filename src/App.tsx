import React, { useEffect, useState } from 'react';
import BoardComponent from './Components/BoardComponent';
import { Board } from './Models/Board';
import "./styles/app.scss"
import LosersFigures from "./Components/LosersFigures"
import { Player } from './Models/Player';
import { Colors } from './Models/Colors';
import Timer from './Components/Timer';

function App() {

  const [board, setBoard] = useState<Board>(new Board())
  const [whitePlayer, setWhitePlayer] = useState<Player>(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState<Player>(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player>(whitePlayer)

  useEffect(() => {
    restart()
  }, [])

  const restart = () => {
    board.createCells()
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = board.updateBoard()
    setBoard(newBoard)
  }

  const changeCurrentPlayer = (player: Player) => {
    setCurrentPlayer(player)
  }

  return (
    <div className='app'>
      <div>
        <Timer currentPlayer={currentPlayer} />
      </div>
      <div>
        <BoardComponent board={board} currentPlayer={currentPlayer} whitePlayer={whitePlayer} blackPlayer={blackPlayer} updateBoard={updateBoard} setCurrentPlayer={changeCurrentPlayer} />
        <div className="losers-figures">
          <LosersFigures title="Белые фигуры" figures={board.losersWhite} />
          <LosersFigures title="Черные фигуры" figures={board.losersBlack} />
        </div>
      </div>

    </div>
  );
}

export default App;
