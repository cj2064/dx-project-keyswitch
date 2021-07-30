import React from 'react'
import KeyboardCard from './KeyboardCard'

function KeyboardListing (props) {
    return (
        <div className="KeyboardListing">
            <h1>{props.keyboard.name}</h1>
            <h1>{props.keyboard.id}</h1>

        </div>
    )
}

export default KeyboardListing
