import React from "react"
import { Figure } from "../Models/Figure"
import "../styles/losers.scss"

interface IProps {
    title: string
    figures: Figure[]
}

const LosersFigures: React.FC<IProps> = ({figures, title}) => {

    return (
        <div className="losers">
            <h3>{title}</h3>
            <div>
                {
                    figures.map(figure => {
                        return (
                            <div key={figure.id}>
                                {figure.name} - <img src={figure.logo!} alt="figure" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default LosersFigures