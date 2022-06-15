import React from 'react'
import { useState } from 'react'
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {
    let [displayMole, setDisplayMole] = useState(false)

    const handleMole = () => {
        props.setScore(props.score + 1)
        setDisplayMole(false)
    }

const display = displayMole ? <Mole setDisplayMole={setDisplayMole} handleMole={handleMole} /> : <EmptySlot />

    return (
        <div>
            {display}
        </div>
    )
}

export default MoleContainer