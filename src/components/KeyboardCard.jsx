import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/KeyboardCard.css';

function KeyboardCard (props) {
  return (
    <div className="KeyboardCard">
       <div className="container">
         <div className="row mt-5">
           <div className="text-dark">
             <div className="KeyboardCard-body">
             <Link to="/keyboardlisting" className="nav-link">
             <img
                src={props.keyboard.imageUrl}
                className="KeyboardCard-img"
                alt="keyboardcardimg"
              />
             </Link>
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
              <button className="btn btn-success btn-sm" href="">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default KeyboardCard;
