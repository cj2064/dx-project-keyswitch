import React from 'react'

function KeyboardCard(props) {
    return (
        <div className="card d-inline-block text-dark">
            <div className="card-body">
                {/* <img></img> IMAGE OF KEYBOARD GOES HERE */}
                <h5 className="card-title bold">{props.keyboard.name}</h5>
                <p className="card-text">
                    <span className="bold">
                        Price: $
                    </span> {props.keyboard.price}
                </p>
                <p className="card-text">
                    <span className="bold">
                        Switches:
                    </span> {props.keyboard.keyswitches}
                </p>
                <p className="card-text">
                    <span className="bold">
                        Description:
                    </span> {props.keyboard.description}
                </p>
            </div>
        </div>
    )
}

export default KeyboardCard
