import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

import '../styles/KeyboardCard.css';

function KeyboardCard (props) {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const keyboardItem = {name: props.name, price: props.price, imageUrl: props.imageUrl}
    setCart(currState => [...currState, keyboardItem]);
  }
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
             <div className="KeyboardCard-text">
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
              <button className="btn btn-success btn-md" href="" onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyboardCard;
