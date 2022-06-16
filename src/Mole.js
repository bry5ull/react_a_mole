import React from 'react'
import { useEffect } from 'react'
import moleImg from './image/mole.png'

const Mole = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={moleImg}  alt='mole' onClick={props.handleMole} />
        </div>
    )
}
export default Mole