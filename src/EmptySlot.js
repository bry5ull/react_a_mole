import React from 'react'
import { useEffect } from 'react'
import molehillImg from './image/molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '30vw'}} src={molehillImg} alt='molehill'/>
        </div>
    )
}
export default EmptySlot

