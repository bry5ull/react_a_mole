import React from 'react'
import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

const MoleContainer = (props) => {
    let [displayMole, setDisplayMole] = useState(false)

    const handleMole = () => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

const display = displayMole ? <Mole toggle={setDisplayMole} handleMole={handleMole} /> : <EmptySlot toggle={setDisplayMole} />

    return (
        <div style={{'display': 'inline-block', 'width': '30vw'}}>
            {display}
        </div>
    )
}

export default MoleContainer