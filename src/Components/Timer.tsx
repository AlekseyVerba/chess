import React, { useEffect, useRef, useState } from "react"
import { Colors } from "../Models/Colors"
import { Player } from "../Models/Player"

interface IProps {
    currentPlayer: Player
}

const Timer: React.FC<IProps> = ({ currentPlayer }) => {

    const [whiteTimer, setWhiteTimer] = useState<number>(300)
    const [blackTimer, setBlackcTimer] = useState<number>(300)

    const changeTimerRef = useRef<null | ReturnType<typeof setInterval>>(null)
    

    useEffect(() => {
        startDecreament()
    }, [currentPlayer])

    const startDecreament = () => {
        if (changeTimerRef.current) {
            clearInterval(changeTimerRef.current)
        }

        if (currentPlayer.color === Colors.WHITE) {
            changeTimerRef.current = setInterval(decraseTimeWhite, 1000)
        } else {
            changeTimerRef.current = setInterval(decraseTimeBlack, 1000)
        }

    }

    const decraseTimeWhite = () => {
        setWhiteTimer(prev => prev - 1)
    }

    const decraseTimeBlack = () => {
        setBlackcTimer(prev => prev - 1)
    }

    return (
        <div>
            <h3>Очередь игрока: {currentPlayer.color}</h3>
            <div>
                Времени у белого игрока: {whiteTimer}
            </div>
            <div>
            Времени у черного игрока: {blackTimer}
            </div>
        </div>
    )
}

export default Timer