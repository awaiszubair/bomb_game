import React from 'react'
import './style.css'


function Boxes({ steps, setSteps, className, generateRandomValue, Player, three, temper, index, four }) {
    return (
        <div className={`boxes ${className}`}
            onClick={(e) => { setSteps(steps + 1); generateRandomValue(); Player(e); }} data-id={index}
        >
            {three && steps ? <img src={three} style={{ width: '100%', height: '100%' }} /> : []}
            {four ? <img src={four} style={{ width: '100%', height: '100%' }} /> : []}
        </div>
    )
}

export default Boxes