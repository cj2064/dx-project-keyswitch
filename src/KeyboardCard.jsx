import React from 'react'
import ducky from './ducky.jpeg';
import './KeyboardCard.css';

function KeyboardCard(props) {
    return (
        <div className="card d-inline-block text-dark col-lg-3">
            <div className="card-body">
                <img src={props.keyboard.imageUrl} className="kb-img" alt="ducky" />
                <h3 className="card-title bold">{props.keyboard.name}</h3>
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
                <button className="btn btn-success btn-sm">Add to Cart</button>
            </div>
        </div>
    )
}

export default KeyboardCard
