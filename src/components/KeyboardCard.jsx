import React from 'react';
import '../styles/KeyboardCard.css';

function KeyboardCard (props) {
  return (
    <div className="KeyboardCard">
       <div className="container">
         <div className="row mt-5">
           <div className="text-dark">
             <div className="KeyboardCard-body">
              <img
                src={props.keyboard.imageUrl}
                className="KeyboardCard-img"
                alt="keyboardcardimg"
              />
              <h2 className="card-title bold">{props.keyboard.name}</h2>
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
                {props.keyboard.description}
              </p>
              <button className="btn btn-success btn-sm">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default KeyboardCard;
